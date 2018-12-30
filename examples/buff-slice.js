const fs = require("fs");

// convert last 3 bytes of a file according to this map, working with binary data directly
const convesionMap = {
  "88": "65",
  "89": "66",
  "90": "67"
};

// read file into a buffer
fs.readFile(__filename, (err, buffer) => {
  // slice buffer to get another binary buffer that holds only last 3 bytes
  let tag = buffer.slice(-4, -1);
  for (let i = 0; i < tag.length; i++) {
    tag[i] = convesionMap[tag[i]];
  }
  console.log(tag.toString());
  console.log(buffer.toString()); // original buffer is also modified
});

// TAG: XYZ
