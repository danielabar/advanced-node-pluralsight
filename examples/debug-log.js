const util = require("util");
const debuglog = util.debuglog("web");

const server = require("http").createServer();

server.on("request", (req, res) => {
  // will only be written if NODE_DEBUG=web
  debuglog("Http Request: %s", req.url);
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("Hello world\n");
});

server.listen(8000);
