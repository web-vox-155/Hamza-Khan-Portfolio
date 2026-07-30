const fs = require('fs');
const sharp = require('sharp');

(async () => {
  const input = 'public/hamza-tiger.jpg';
  const output = 'public/hamza-tiger-portrait.png';

  const image = sharp(input);
  const { width, height } = await image.metadata();
  const { data } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });

  const outputBuffer = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const srcIndex = (y * width + x) * 4;
      const r = data[srcIndex];
      const g = data[srcIndex + 1];
      const b = data[srcIndex + 2];
      const a = data[srcIndex + 3];

      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const saturation = max === 0 ? 0 : (max - min) / max;
      const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

      const isBackground =
        a < 220 ||
        (luminance > 145 && saturation < 0.18) ||
        (Math.abs(r - g) < 10 && Math.abs(g - b) < 10 && luminance > 110);

      const dstIndex = (y * width + x) * 4;
      outputBuffer[dstIndex] = r;
      outputBuffer[dstIndex + 1] = g;
      outputBuffer[dstIndex + 2] = b;
      outputBuffer[dstIndex + 3] = isBackground ? 0 : 255;
    }
  }

  await sharp(outputBuffer, { raw: { width, height, channels: 4 } }).png().toFile(output);
  console.log(`Created ${output}`);
})();
