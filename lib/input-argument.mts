import { debug } from "console";
import { error } from "./logger.mjs";

export const getArguments = () => {
  let args = process.argv;

  args = args.slice(2);

  if (args.length !== 1) {
    error("Houston, we have a problem. Invlaid number of args received");
    debug(args);
  }
  return args;
};
