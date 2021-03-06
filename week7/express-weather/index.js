const express = require("express");
const hbs = require("express-handlebars");
const { getWeather } = require("./lib/fetchWeather.js");

const app = express();

app.engine("handlebars", hbs());
app.set("view engine", "handlebars");

app.get("/", async (req, res) => {
  const weather = await getWeather("Liverpool", "uk");
  res.render("home", { weather });
});

app.listen(3000, () => {
  "Express server running on port 3000";
});
