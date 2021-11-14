import { inspect } from "util";

export const trace = (message: any) => log(console.trace, message);

export const debug = (message: any) => log(console.debug, message);

export const info = (message: any) => log(console.info, message);

export const warn = (message: any) => log(console.warn, message);

export const error = (message: any) => log(console.error, message);

export const log = (logwriter: any, message: any) => {
  // TODO: Extract Desired log level from env var

  if (typeof message === "object") {
    logwriter(inspect(message, { depth: null }));
  } else {
    logwriter(message);
  }
};
