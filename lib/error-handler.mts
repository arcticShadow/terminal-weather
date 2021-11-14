import { error } from "./logger.mjs";

export const errorHandler = (e: unknown) => {
  if (e instanceof TypeError) {
    // Type Error was Thrown
    error(`Type Error: ${e.message}`);
  } else if (e instanceof RangeError) {
    // Range Error was Thrown
    error(`Range Error: ${e.message}`);
  } else if (e instanceof EvalError) {
    // Eval Error was Thrown
    error(`EvalError Error: ${e.message}`);
  } else if (typeof e === "string") {
    // String was Thrown
    error(`String Thrown: ${e}`);
  } else {
    // Fallback Error Handler
    error(`Fallback Error Logger: ${e}`);
  }
};
