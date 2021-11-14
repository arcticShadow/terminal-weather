import { debug } from "console";
import format from "date-fns/format/index.js";
import { getArguments } from "./input-argument.mjs";
import { App } from "./screen/app.mjs";
import { getWeatherFor } from "./weather.mjs";

const searchLocation = getArguments()[0];
const weather = await getWeatherFor(searchLocation);
debug(weather);

const app = new App();
app.addRain("lots");
app.addWind({
  speed: weather.wind.speed,
  direction: weather.wind.deg,
  gust: weather.wind.gust,
});
app.addCloud(weather.clouds.all);
app.addSun({
  sunrise: format(new Date(weather.sys.sunrise * 1000), "H:mm"),
  sunset: format(new Date(weather.sys.sunset * 1000), "H:mm"),
});
app.addTemp(weather.main);
