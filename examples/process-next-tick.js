const fs = require("fs");

// bad that fileSize can be either sync or async depending on if validation passes or fails
// sol'n: instead of directly invoking cb, wrap it in process.nextTick
function fileSize(fileName, cb) {
  // validation (synchronous)
  if (typeof fileName !== "string") {
    // return cb(new TypeError("argument should be string"));
    return process.nextTick(cb, new TypeError("argument should be string"));
  }

  // get size (asynchronous)
  fs.stat(fileName, (err, stats) => {
    if (err) {
      return cb(err);
    }
    cb(null, stats.size);
  });
}

// invoke fileSize with valid argument
// but issue if call with invalid argument such as number 1, because validation is synchronous
// will throw error, but Hello will never get printed to console
// fileSize(__filename, (err, size) => {
fileSize(1, (err, size) => {
  if (err) throw err;
  console.log(`Size in KB: ${size / 1024}`);
});

// expect this to be printed first
console.log("Hello!");
