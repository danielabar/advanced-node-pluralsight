// clear screen
process.stdout.write("\u001B[2J\u001B[0;0f");
let counter = 0;
let sockets = {}; // keep track of all connected clients

// for a real chat server, would use monent/tz to handle all cases
function timestamp() {
  const now = new Date();
  return `${now.getHours()}:${now.getMinutes()}`;
}

const server = require("net").createServer();

// register connection handler that fires every time a client connects to this server
// handler exposes connected socket
// socket object implements duplex stream interface - i.e. can read and write to it
server.on("connection", socket => {
  socket.id = counter++;

  console.log("Client connected");
  socket.write("Please type your name: ");

  // chat server: every connected client receives all messages from every other connected client
  socket.on("data", data => {
    if (!sockets[socket.id]) {
      // if get here, have not yet registered this client, capture their name now
      socket.name = data.toString().trim();
      socket.write(`Welcome ${socket.name}!\n`);
      sockets[socket.id] = socket;
      return;
    }
    Object.entries(sockets).forEach(([key, clientSocket]) => {
      if (socket.id == key) return;
      clientSocket.write(`${socket.name} ${timestamp()}: `);
      clientSocket.write(data);
    });
  });

  // handle client terminates connection
  socket.on("end", () => {
    // stop tracking this socket
    delete sockets[socket.id];
    console.log("Client disconnected");
  });
});

// Run server by listening on a port
server.listen(8000, () => console.log("Server bound"));
