import { get as https_get } from "https";

export const get = async (url: URL | string): Promise<string> =>
  new Promise((resolve, reject) =>
    https_get(url, (resp) => {
      let data = "";

      // A chunk of data has been received.
      resp.on("data", (chunk) => {
        data += chunk;
      });

      resp.on("end", () => {
        console.log(JSON.parse(data).explanation);
        resolve(data);
      });
    }).on("error", reject)
  );
