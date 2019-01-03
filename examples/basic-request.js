const http = require("http");

const req = http.request(
  {
    hostname: "www.google.com",
    method: "GET" // default
  },
  res => {
    // console.log(res);
    console.log(res.statusCode);
    console.log(res.headers);

    res.on("data", data => {
      console.log(data.toString());
    });
  }
);

req.on("error", err => console.log(err));

// need to terminate the stream
req.end();
