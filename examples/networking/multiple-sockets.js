// clear screen
process.stdout.write("\u001B[2J\u001B[0;0f");
let counter = 0;
let sockets = {}; // keep track of all connected clients

const server = require("net").createServer();

// register connection handler that fires every time a client connects to this server
// handler exposes connected socket
// socket object implements duplex stream interface - i.e. can read and write to it
server.on("connection", socket => {
  socket.id = counter++;
  sockets[socket.id] = socket;
  console.log("Client connected");
  socket.write("Welcome new client!\n");

  // chat server: every connected client receives all messages from every other connected client
  socket.on("data", data => {
    Object.entries(sockets).forEach(([, clientSocket]) => {
      clientSocket.write(`${socket.id}: `);
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
