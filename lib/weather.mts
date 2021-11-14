import { getConfig } from "./config.mjs";
import { get } from "./https-get.mjs";

export const getWeatherFor = async (searchLocation: string) => {
  const config = await getConfig();

  const weather = await get(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=${config.OPENWEATHERMAP_APIKEY}`
  );
  return weather;
};
