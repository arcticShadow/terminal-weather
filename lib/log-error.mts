import { error } from "./logger.mjs";

export const logError = (err: Error) => {
  error(err.message);
};
