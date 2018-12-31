// Shared between Server and Client
const dgram = require("dgram");
const PORT = 3333;
const HOST = "127.0.0.1";

// Server
// server object is event emitter
const server = dgram.createSocket("udp4");

server.on("listening", () => console.log("UDP Server listening"));

// fired every time server receives a message
// callback exposes message and remote information
server.on("message", (msg, rinfo) => {
  // port number will be different for every new client/socket
  console.log(`${rinfo.address}:${rinfo.port} - ${msg}`);
});

// to listen on socket, use `server.bind`
server.bind(PORT, HOST);

// Client
// setInterval(function() {
//   let client = dgram.createSocket("udp4");
//   // Send UDP packet
//   client.send("Pluralsight rocks", PORT, HOST, err => {
//     if (err) throw err;
//     console.log("UDP message sent");
//     client.close();
//   });
// }, 1000);
const client = dgram.createSocket("udp4");
const msg = Buffer.from("Pluralsight rocks");

// Send UDP packet
client.send(msg, 0, msg.length, PORT, HOST, err => {
  if (err) throw err;
  console.log("UDP message sent");
  client.close();
});
