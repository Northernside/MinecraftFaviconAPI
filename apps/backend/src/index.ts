import {createAPI} from "@b64viewer/api";

const main = async () => {
  const api = createAPI();

  api.listen(420, () => {
    console.log("API listening on port 420");
  });
};

main();
