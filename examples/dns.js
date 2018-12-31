const dns = require("dns");

dns.lookup("pluralsight.com", (err, address) => {
  console.log(`lookup: ${address}`);
});

dns.resolve4("pluralsight.com", (err, address) => {
  console.log(`resolve4: ${JSON.stringify(address)}`);
});

dns.resolve("pluralsight.com", "A", (err, address) => {
  console.log(`resolve A: ${JSON.stringify(address)}`);
});

dns.resolve("pluralsight.com", "MX", (err, address) => {
  console.log(`resolve MX: ${JSON.stringify(address)}`);
});

dns.reverse("54.70.118.65", (err, hostnames) => {
  console.log(`reverse: ${JSON.stringify(hostnames)}`);
});
