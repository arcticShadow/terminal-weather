import blessed from "blessed";

const { box } = blessed;

export type Temp = {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
};

export const tempBox = (temp: Temp) => {
  return box({
    top: "0",
    left: "60%",
    width: "20%",
    height: "50%",
    content: `{center}{bold}Temprature{/bold}\nCurrently ${temp.temp} but feels like ${temp.feels_like}. Expect a minimum of ${temp.temp_min} and a maximum of ${temp.temp_max} throughout the day {/}`,
    tags: true,
    border: {
      type: "line",
    },
  });
};
