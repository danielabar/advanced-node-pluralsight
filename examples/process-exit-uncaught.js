// process is an event emitter

process.on("exit", code => {
  console.log(`About to exit with code: ${code}`);
});

process.on("uncaughtException", err => {
  // this will prevent process from exiting, keepind node running in an unpredictable state
  console.error(err);
  // FORCE exit the process
  process.exit(1);
});

// keep the event loop busy
process.stdin.resume();

// trigger a TypeError exception
console.dog();
