
const fetch = require("node-fetch");

const getWeatherData = async () => {
  const date = new Date();
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=YOURAPIKEY`
  );
  const data = await response.json();
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const backgroundColors = {
    blue: '#00b0ff',
    yellow: '#ffcc00'
  };
  return {
    date,
    temperature,
    description,
    backgroundColors
  };
};

export default (req, res) => {
  const data = getWeatherData();
  res.json(