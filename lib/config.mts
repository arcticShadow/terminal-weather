import { FileHandle, open, readFile } from "fs/promises";
import { join } from "path";
import { errorHandler } from "./error-handler.mjs";

let config: Record<string, string> = {};

const findDotEnv = async (path = "."): Promise<FileHandle> => {
  try {
    const fh = await open(`${path}/.env`, "r");
    return fh;
  } catch (e) {
    console.log(typeof e);
    console.log(e);
    return await findDotEnv(join("..", path));
  }
};

export const getConfig = async () => {
  if (Object.getOwnPropertyNames(config).length > 0) {
    return config;
  } else {
    try {
      const dotEnvFileHandle = await findDotEnv();
      const envFile = await readFile(dotEnvFileHandle);
      const envFileLines = envFile.toString().split("\n");

      for (let line of envFileLines) {
        const [key, value] = line.split("=");
        key.trimEnd();
        value.trimStart();

        config[key] = value;
      }
    } catch (e) {
      errorHandler(e);
    }

    return config;
  }
};
