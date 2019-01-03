const fs = require("fs");

const server = require("https").createServer({
  key: fs.readFileSync("key.pem", "utf8"),
  cert: fs.readFileSync("server.crt", "utf8")
});

server.on("request", (req, res) => {
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello world\n");
});

server.listen(443);
