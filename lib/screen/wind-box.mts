import blessed from "blessed";

const { box } = blessed;

export type Wind = {
  speed: number,
  direction: number,
  gust: number,
};

export const windBox = (wind: Wind) => {
  return box({
    top: "0",
    left: "40%",
    width: "20%",
    height: "50%",
    content: `{center}{bold}Wind{/bold}\nSpeed: ${wind.speed}m/s\nDirection: ${wind.direction}°\n Gusting: ${wind.gust}m/s{/}`,
    tags: true,
    border: {
      type: "line",
    },
  });
};
