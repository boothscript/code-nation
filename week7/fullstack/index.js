const express = require("express");
const cors = require("cors");
const app = express();

const test = cors();
console.log(test);
console.log(cors);
app.use(cors());

app.get("/", (req, res) => {
  res.writeHead(200, { "content-type": "application/json" });
  res.write(JSON.stringify({ status: "working" }));
  res.end();
});

app.listen(4000, () => {
  console.log("online");
});
