const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

// 1. Process Screen 3 (Lilac wall: R:177, G:156, B:191)
const s3Path = path.join(__dirname, 'assets', 'screen_3_live_preview.png');
const s3Out = path.join(__dirname, 'assets', 'screen_3_transparent_wall.png');
const s3Png = PNG.sync.read(fs.readFileSync(s3Path));

let s3WallCount = 0;
// Only key out in the wall area: y between 0 and 1250 (above the floor and favourites bar)
for (let y = 0; y < s3Png.height; y++) {
  for (let x = 0; x < s3Png.width; x++) {
    const idx = (s3Png.width * y + x) << 2;
    const r = s3Png.data[idx];
    const g = s3Png.data[idx + 1];
    const b = s3Png.data[idx + 2];

    if (y < 1180) { // Wall region
      const diff = Math.sqrt(
        Math.pow(r - 177, 2) +
        Math.pow(g - 156, 2) +
        Math.pow(b - 191, 2)
      );
      if (diff < 12) {
        s3WallCount++;
        s3Png.data[idx + 3] = 0; // Transparent!
      }
    }
  }
}
fs.writeFileSync(s3Out, PNG.sync.write(s3Png));
console.log(`Screen 3: Keyed out ${s3WallCount} wall pixels to transparent! Saved to ${s3Out}`);

// 2. Process Screen 4 (Blue wall: R:74, G:132, B:180)
const s4Path = path.join(__dirname, 'assets', 'screen_4_ai_suggestions.png');
const s4Out = path.join(__dirname, 'assets', 'screen_4_transparent_wall.png');
const s4Png = PNG.sync.read(fs.readFileSync(s4Path));

let s4WallCount = 0;
for (let y = 0; y < s4Png.height; y++) {
  for (let x = 0; x < s4Png.width; x++) {
    const idx = (s4Png.width * y + x) << 2;
    const r = s4Png.data[idx];
    const g = s4Png.data[idx + 1];
    const b = s4Png.data[idx + 2];

    if (y < 1000) { // Wall region in Screen 4
      const diff = Math.sqrt(
        Math.pow(r - 74, 2) +
        Math.pow(g - 132, 2) +
        Math.pow(b - 180, 2)
      );
      if (diff < 14) {
        s4WallCount++;
        s4Png.data[idx + 3] = 0; // Transparent!
      }
    }
  }
}
fs.writeFileSync(s4Out, PNG.sync.write(s4Png));
console.log(`Screen 4: Keyed out ${s4WallCount} wall pixels to transparent! Saved to ${s4Out}`);
