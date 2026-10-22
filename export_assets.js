const https = require("https");
const fs = require("fs");
const path = require("path");

const token = process.env.FIGMA_TOKEN || "";
const fileKey = "W33CUPs2O4jn4NnU0nfwJW";

const outputDir = path.join(__dirname, "assets");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function figmaGet(apiPath) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "api.figma.com",
      path: apiPath,
      headers: { "X-Figma-Token": token }
    };
    https.get(options, (res) => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error("Failed to parse JSON: " + data.slice(0, 300)));
        }
      });
    }).on("error", reject);
  });
}

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on("finish", () => {
        file.close(resolve);
      });
    }).on("error", (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

async function exportNodes(nodeMap, scale = 2) {
  const ids = Object.keys(nodeMap).join(",");
  console.log(`Requesting export for ${Object.keys(nodeMap).length} nodes at scale ${scale}x...`);
  const res = await figmaGet(`/v1/images/${fileKey}?ids=${encodeURIComponent(ids)}&scale=${scale}&format=png`);
  if (!res.images) {
    console.error("Export error:", res);
    return;
  }

  for (const [id, url] of Object.entries(res.images)) {
    if (!url) {
      console.warn(`No image URL for ${id} (${nodeMap[id]})`);
      continue;
    }
    const fileName = nodeMap[id] + ".png";
    const dest = path.join(outputDir, fileName);
    process.stdout.write(`Downloading ${fileName}... `);
    await downloadFile(url, dest);
    console.log("Done!");
  }
}

async function main() {
  const framesToExport = {
    // 4 Main Screens
    "7766:3645": "screen_1_home",
    "7766:4086": "screen_2_home_bottomsheet",
    "7766:3320": "screen_3_live_preview",
    "7766:4590": "screen_4_ai_suggestions",

    // Slices and Sub-elements
    "7766:4527": "element_bottom_sheet_modal", // the modal drawer
    "7766:3323": "element_room_purple", // purple living room
    "7766:4727": "element_room_blue", // blue living room
    "7766:3632": "element_camera_shutter_bar", // circular shutter + AI sparkle
    "7766:3488": "element_live_preview_header", // top navigation header
    "7766:3629": "element_bottom_nav", // bottom nav
    "7766:4628": "element_ai_card_details", // Violet veil card
    "7766:4689": "element_btn_estimate_cost", // Estimate cost button
    "7766:3458": "element_favorites_bar", // Favourites swatches
    "7766:4593": "element_ai_color_palette" // AI suggested swatches
  };

  await exportNodes(framesToExport, 2);
  console.log("\nAll assets downloaded successfully into 'assets/' folder!");
}

main().catch(console.error);
