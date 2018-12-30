// clear screen
process.stdout.write("\u001B[2J\u001B[0;0f");

const server = require("net").createServer();

// register connection handler that fires every time a client connects to this server
// handler exposes connected socket
// socket object implements duplex stream interface - i.e. can read and write to it
server.on("connection", socket => {
  console.log("Client connected");
  socket.write("Welcome new client!\n");

  // handle client sending data to socket
  socket.on("data", data => {
    console.log("data is:", data);
    socket.write("data is: ");
    socket.write(data); // if not specified, assumes UTF8 encoding so data will be echoed back to client as string: socket.write(data, 'utf8')
  });

  // handle client terminates connection
  socket.on("end", () => {
    console.log("Client disconnected");
  });
});

// Run server by listening on a port
server.listen(8000, () => console.log("Server bound"));
