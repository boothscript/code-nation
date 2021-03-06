const express = require("express");
const hbs = require("express-handlebars");

const app = express();

app.engine("handlebars", hbs());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  "Express server running on port 3000";
});
