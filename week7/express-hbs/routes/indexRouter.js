const express = require("express");
const router = express.Router();

const getWeather = require("../lib/weather");

router.get("/", async (req, res) => {
  const weather = await getWeather("manchester", "uk");
  res.render("index", { weather });
});

module.exports = router;
