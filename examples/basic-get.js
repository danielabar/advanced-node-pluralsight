const http = require("http");

// req: http.ClientRequest
const req = http.get("http://www.google.com", res => {
  // res: http.IncomingMessage
  console.log(res.statusCode);
  console.log(res.headers);

  res.on("data", data => {
    console.log(data.toString());
  });
});

req.on("error", err => console.log(err));

console.log(req.agent); // http.Agent
