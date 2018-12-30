const fs = require("fs");

const readFileAsArray = function(file, cb = () => {}) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, function(err, data) {
      if (err) {
        reject(err);
        return cb(err);
      }
      const lines = data
        .toString()
        .trim()
        .split("\n");
      resolve(lines);
      cb(null, lines);
    });
  });
};

// example call - promise version
readFileAsArray("numbers.txt")
  .then(lines => {
    const numbers = lines.map(Number);
    const oddNumbers = numbers.filter(number => number % 2 === 1);
    console.log(`odd numbers count: ${oddNumbers.length}`);
  })
  .catch(console.error);

// but still supports old callback style
readFileAsArray("numbers.txt", (err, lines) => {
  if (err) throw err;
  const numbers = lines.map(Number);
  const oddNumbers = numbers.filter(number => number % 2 === 1);
  console.log(`odd numbers count: ${oddNumbers.length}`);
});
