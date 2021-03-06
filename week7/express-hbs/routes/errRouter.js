const express = require("express");
const router = express.Router();

const getWeather = require("../lib/weather");

router.get("/", async (req, res) => {
  res.render("404");
});

module.exports = router;
