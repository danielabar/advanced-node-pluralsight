const server = require("http").createServer();

// server.on("request", (req, res) => {
//   res.writeHead(200, { "content-type": "text/plain" });
//   // end terminates message
//   res.end("Hello world\n");
// });

// experiment - do not terminate
server.on("request", (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  // do not terminate, client will wait because node is still streaming
  res.write("Hello world\n");

  // write another message after one second
  setTimeout(function() {
    res.write("Another Hello world\n");
  }, 1000);

  // write another message after two seconds
  setTimeout(function() {
    res.write("Yet Another Hello world\n");
  }, 2000);

  // default server timeout
  setTimeout(function() {
    res.write("Ain't gonna happen\n");
  }, 130000);
});

server.timeout = 500;
server.listen(8000);
