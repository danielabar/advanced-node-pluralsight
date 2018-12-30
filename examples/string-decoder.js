const { StringDecoder } = require("string_decoder");
const decoder = new StringDecoder("utf8");

process.stdin.on("readable", () => {
  const chunk = process.stdin.read();
  if (chunk != null) {
    const buffer = Buffer.from([chunk]);
    console.log(`With .toSring(): ${buffer.toString()}`);
    console.log(`With StringDecoder: ${decoder.write(buffer)}`);
  }
});

// Test
// node StringDecoder.js
// 0xE2
// 0x82
// 0xAC
// now string decoder will figure out the above 3 together make euro character
