const express = require("express");
const router = express.Router();

const getWeather = require("../lib/weather");

router.get("/", async (req, res) => {
  res.render("weather");
});

router.post("/", async (req, res) => {
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

module.exports = router;
