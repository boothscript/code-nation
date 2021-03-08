const fetch = require("node-fetch");
require("dotenv").config();

const getWeather = async (city, code, units = "metric") => {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${code}&appid=${process.env.APPID}`
  ).then((response) => response.json());
  return result;
};

const getForecast = async (city, code, units = "metric") => {
  const result = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${code}&appid=${process.env.APPID}`
  ).then((response) => response.json());
  return result;
};

module.exports = { getForecast, getWeather };
