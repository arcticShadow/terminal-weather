import blessed from "blessed";

const { box } = blessed;

export type Sun = { sunrise: string, sunset: string };

export const sunBox = (sun: Sun) => {
  return box({
    top: "0",
    left: "0",
    width: "20%",
    height: "50%",
    content: `{center}{bold}Sun{/bold}\nSunrise: ${sun.sunrise}\n Sunset: ${sun.sunset}`,
    tags: true,
    border: {
      type: "line",
    },
  });
};
