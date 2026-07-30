const sharp = require("sharp");
const fs = require("fs");

async function run() {
  const inputPath = "public/hamza-tiger.jpg";
  const outputPath = "public/hamza-portrait.png";

  const image = sharp(inputPath);
  const { width, height } = await image.metadata();
  const { data } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });

  // Sample the background color from the four corners and average them —
  // this assumes a plain, mostly-solid-color backdrop, which is what makes
  // this technique reliable (unlike guessing on a busy real-world photo).
  const corners = [
    [2, 2],
    [width - 3, 2],
    [2, height - 3],
    [width - 3, height - 3],
  ];
  let sumR = 0, sumG = 0, sumB = 0;
  for (const [cx, cy] of corners) {
    const i = (cy * width + cx) * 4;
    sumR += data[i];
    sumG += data[i + 1];
    sumB += data[i + 2];
  }
  const bgR = sumR / corners.length;
  const bgG = sumG / corners.length;
  const bgB = sumB / corners.length;
  console.log("Detected background color (approx):", bgR.toFixed(0), bgG.toFixed(0), bgB.toFixed(0));

  const output = Buffer.alloc(width * height * 4);
  const threshold = 42; // color distance below this = treated as background
  const featherRange = 25; // smooth fade zone above threshold, avoids hard jagged edges

  for (let p = 0; p < width * height; p++) {
    const i = p * 4;
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const dist = Math.sqrt((r - bgR) ** 2 + (g - bgG) ** 2 + (b - bgB) ** 2);

    let alpha;
    if (dist < threshold) {
      alpha = 0;
    } else if (dist < threshold + featherRange) {
      alpha = Math.round(((dist - threshold) / featherRange) * 255);
    } else {
      alpha = 255;
    }

    output[i] = r;
    output[i + 1] = g;
    output[i + 2] = b;
    output[i + 3] = alpha;
  }

  await sharp(output, { raw: { width, height, channels: 4 } }).png().toFile(outputPath);
  console.log("Wrote", outputPath);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
