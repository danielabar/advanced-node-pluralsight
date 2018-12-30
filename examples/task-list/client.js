const EventEmitter = require("events");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// client is simple, not much logic so fine to instantiate eventemitter directly
const client = new EventEmitter();
const server = require("./server")(client);

server.on("response", resp => {
  // special string to clear terminal
  process.stdout.write("\u001B[2J\u001B[0;0f");
  process.stdout.write(resp);
  process.stdout.write("\n> ");
});

let command, args;
rl.on("line", input => {
  [command, ...args] = input.split(" ");
  client.emit("command", command, args);
});
