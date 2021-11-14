import blessed from "blessed";

const { box } = blessed;

export type Cloud = number;

export const cloudBox = (cloud: Cloud) => {
  return box({
    top: "0",
    left: "80%",
    width: "20%",
    height: "50%",
    content: `{center}{bold}Cloud Cover{/bold}\n${cloud}%{/}`,
    tags: true,
    border: {
      type: "line",
    },
  });
};
