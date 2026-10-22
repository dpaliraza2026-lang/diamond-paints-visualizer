const https = require("https");
const fs = require("fs");
const path = require("path");

const token = process.env.FIGMA_TOKEN || "";
const fileKey = "W33CUPs2O4jn4NnU0nfwJW";
const targetNodeId = "7766:3319";

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

async function main() {
  console.log("Fetching node:", targetNodeId);
  const res = await figmaGet(`/v1/files/${fileKey}/nodes?ids=${encodeURIComponent(targetNodeId)}`);
  if (!res.nodes || !res.nodes[targetNodeId]) {
    console.log("Response:", JSON.stringify(res, null, 2).slice(0, 500));
    return;
  }

  const doc = res.nodes[targetNodeId].document;
  console.log(`Document Name: "${doc.name}", Type: ${doc.type}`);

  function printTree(node, depth = 0) {
    const indent = "  ".repeat(depth);
    console.log(`${indent}- [${node.id}] ${node.name} (${node.type})`);
    if (depth < 3 && node.children) {
      node.children.forEach(c => printTree(c, depth + 1));
    }
  }

  printTree(doc);
}

main().catch(console.error);
