const fs = require("fs");
const http = require("http");

const hostname = "localhost";
const port = 3000;

const sever = http.createServer((req, res) => {
  console.log(`request made to ${req.url}`);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/about.html").pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/404.html").pipe(res);
  }
});

sever.listen(port, hostname, () => {
  console.log(`Server running at port http://${hostname}:${port}`);
});
