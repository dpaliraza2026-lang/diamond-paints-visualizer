const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');

const purplePath = path.join(__dirname, 'assets', 'element_room_purple.png');
const bluePath = path.join(__dirname, 'assets', 'element_room_blue.png');
const outPath = path.join(__dirname, 'assets', 'furniture_transparent.png');

console.log('Reading room images...');
const purpleBuf = fs.readFileSync(purplePath);
const blueBuf = fs.readFileSync(bluePath);

const purplePng = PNG.sync.read(purpleBuf);
const bluePng = PNG.sync.read(blueBuf);

console.log(`Dimensions: ${purplePng.width}x${purplePng.height}`);

const outPng = new PNG({ width: purplePng.width, height: purplePng.height });

// Compare every pixel
let wallCount = 0;
let furnitureCount = 0;

for (let y = 0; y < purplePng.height; y++) {
  for (let x = 0; x < purplePng.width; x++) {
    const idx = (purplePng.width * y + x) << 2;

    const pr = purplePng.data[idx];
    const pg = purplePng.data[idx + 1];
    const pb = purplePng.data[idx + 2];

    const br = bluePng.data[idx];
    const bg = bluePng.data[idx + 1];
    const bb = bluePng.data[idx + 2];

    // Calculate color difference between purple and blue image
    const diff = Math.sqrt(
      Math.pow(pr - br, 2) +
      Math.pow(pg - bg, 2) +
      Math.pow(pb - bb, 2)
    );

    // If diff is significant, this pixel is on the WALL (it changed color between purple and blue!)
    // If diff is very small, this pixel is FOREGROUND (sofa, plant, art frame, floor!)
    if (diff > 18) {
      wallCount++;
      // Wall pixel: Make it completely transparent!
      outPng.data[idx] = 0;
      outPng.data[idx + 1] = 0;
      outPng.data[idx + 2] = 0;
      outPng.data[idx + 3] = 0; // Alpha = 0 (Transparent!)
    } else {
      furnitureCount++;
      // Foreground pixel (sofa, frame, floor, etc.): Keep full opacity from purplePng!
      outPng.data[idx] = pr;
      outPng.data[idx + 1] = pg;
      outPng.data[idx + 2] = pb;
      outPng.data[idx + 3] = 255; // Full opacity!
    }
  }
}

console.log(`Wall pixels (transparent): ${wallCount}, Foreground pixels (sofa/plant/frame): ${furnitureCount}`);

const buffer = PNG.sync.write(outPng);
fs.writeFileSync(outPath, buffer);
console.log('Saved isolated furniture layer to:', outPath);
