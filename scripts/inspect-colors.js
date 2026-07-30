const sharp = require('sharp');

(async () => {
  const image = sharp('public/hamza-tiger.jpg');
  const { width, height } = await image.metadata();
  const { data } = await image.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const map = new Map();

  const quantize = (value) => Math.round(value / 16) * 16;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const i = (y * width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      if (a < 200) continue;
      const key = `${quantize(r)}:${quantize(g)}:${quantize(b)}`;
      map.set(key, (map.get(key) || 0) + 1);
    }
  }

  const top = [...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, 20);
  console.log(top.map(([key, count]) => ({ key, count })));
})();
