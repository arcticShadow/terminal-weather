import { debug } from "console";
import { getArguments } from "./input-argument.mjs";
import { info } from "./logger.mjs";
import { getWeatherFor } from "./weather.mjs";

info("Hello World!");

const searchLocation = getArguments()[0];

const weather = await getWeatherFor(searchLocation);

debug(weather);
