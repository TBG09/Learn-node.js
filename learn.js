const fs = require('fs').promises;

async function main() {
  try {
    const startDir = process.cwd(); // Correctly call process.cwd() to get the current directory

    console.log("​"); // Using no width space character to jump line.
    console.log("test from index.js");
    console.log("Running on OS " + process.platform);
    console.log("Start dir: " + startDir);
    console.log("Contents of test.txt are (or is, don't question my grammar): " + await fs.readFile('test.txt', 'utf8'));
  } catch (err) {
    console.error("Error:", err);
  }
}

// Call the async function
main();

process.on('exit', function () {
  console.log("node.js runtime stopping.");
});
