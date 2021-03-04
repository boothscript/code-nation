const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");

const getWeather = require("./lib/weather");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine("hbs", hbs({ extname: ".hbs", defaultLayout: "layout" }));
app.set("view engine", ".hbs");

app.get("/", async (req, res) => {
  const weather = await getWeather("manchester", "uk");
  res.render("index", { weather });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("*", (req, res) => {
  res.render("404");
});
app.get("/weather", async (req, res) => {
  res.render("weather");
});
app.post("/weather", async (req, res) => {
  console.log("here");
  const city = req.body.city;
  const country = req.body.code;
  const weather = await getWeather(city, country);
  if (weather.code == 404) {
    res.render("weather", { err: "no worky" });
    return;
  }
  const name = weather.name;
  const temp = weather.main.temp;
  const feels_like = weather.main.feels_like;
  res.render("weather", {
    name,
    data: { temp, feels_like },
    listExists: true,
    err: null,
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
