const fs = require("fs");
const path = require("path");

const dirname = path.join(__dirname, "data3");
const currentFiles = fs.readdirSync(dirname);

const logWithTime = message =>
  console.log(`${new Date().toUTCString()}: ${message}`);

fs.watch(dirname, (eventType, filename) => {
  console.log(`Watching ${dirname}...`);
  if (eventType === "rename") {
    // add or delete
    const index = currentFiles.indexOf(filename);
    if (index >= 0) {
      // if file exists in current, this is a remove event
      currentFiles.splice(index, 1);
      logWithTime(`${filename} was removed`);
      return;
    }

    currentFiles.push(filename);
    logWithTime(`${filename} was added`);
    return;
  }

  logWithTime(`${filename} was changed`);
});
