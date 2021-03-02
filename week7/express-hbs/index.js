const express = require("express");
const hbs = require("express-handlebars");

const getPerson = require("./lib/person");

const app = express();

app.engine("hbs", hbs({ extname: ".hbs", defaultLayout: "layout" }));
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  const data = getPerson();

  res.render("index", { data });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
