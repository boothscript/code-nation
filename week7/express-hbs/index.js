const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");

const getPerson = require("./lib/person");
const getPlaceholder = require("./lib/placeholder");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.engine("hbs", hbs({ extname: ".hbs", defaultLayout: "layout" }));
app.set("view engine", ".hbs");

app.get("/", async (req, res) => {
  const personData = getPerson();
  const peopleData = await getPlaceholder();
  console.log(peopleData);
  res.render("index", { personData, peopleData });
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
