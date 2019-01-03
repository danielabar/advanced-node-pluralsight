const server = require("https").createServer({
  key: "tbd",
  cert: "tbd"
});

server.on("request", (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello world\n");
});

server.listen(8000);
