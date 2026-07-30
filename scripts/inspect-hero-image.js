const sharp = require('sharp');

(async () => {
  const image = sharp('public/hamza-tiger.jpg');
  const { width, height } = await image.metadata();
  const { data } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });

  const sample = (x, y) => {
    const i = (y * width + x) * 4;
    return { r: data[i], g: data[i + 1], b: data[i + 2], a: data[i + 3] };
  };

  const points = [
    [0, 0],
    [width - 1, 0],
    [0, height - 1],
    [width - 1, height - 1],
    [Math.floor(width / 2), Math.floor(height / 2)],
    [Math.floor(width * 0.25), Math.floor(height * 0.25)],
    [Math.floor(width * 0.75), Math.floor(height * 0.75)],
  ];

  console.log('size', width, height);
  for (const [x, y] of points) {
    console.log('point', x, y, sample(x, y));
  }
})();
