import blessed from "blessed";

const { box } = blessed;

export type Rain = string;

export const rainBox = (rain: Rain) => {
  return box({
    top: "0",
    left: "20%",
    width: "20%",
    height: "50%",
    content: `{center}{bold}Rainfall{/bold}\n${rain}\n(No Rainfall data in API) {/}`,
    tags: true,
    border: {
      type: "line",
    },
  });
};
