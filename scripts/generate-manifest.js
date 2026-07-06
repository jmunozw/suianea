const fs = require("fs");
const path = require("path");

const testsDir = path.join(__dirname, "..", "tests");
const files = fs.readdirSync(testsDir)
  .filter((file) => /^(aena|test)\d+\.js$/i.test(file))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const manifest = files.map((file) => ({
  name: file.replace(/\.js$/i, "").toUpperCase(),
  file
}));

fs.writeFileSync(path.join(testsDir, "tests.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(`Generado tests/tests.json con ${manifest.length} tests.`);
