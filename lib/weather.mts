import { getConfig } from "./config.mjs";
import { get } from "./https-get.mjs";

export const getWeatherFor = async (searchLocation: string) => {
  const config = await getConfig();

  const weather = await get(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=${config.OPENWEATHERMAP_APIKEY}&units=metric`
  );
  return parseWeather(weather);
};

const parseWeather = (weather: string): WeatherPayload => {
  return JSON.parse(weather);
};

type WeatherPayload = {
  coord: {
    lon: string,
    lat: string,
  },
  weather: [
    {
      id: string,
      clouds: string,
      description: string,
      main: string,
      icon: string,
    }
  ],
  base: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number,
    sea_level: number,
    grnd_level: number,
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number,
    gust: number,
  },
  clouds: { all: number },
  dt: number,
  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number,
  },
  timezone: number,
  id: number,
  name: string,
  cod: number,
};
