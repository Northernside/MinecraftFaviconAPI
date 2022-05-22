import express  from "express";
import redis from "ioredis";
import * as mcutil from "minecraft-server-util";
import { REDIS_URL } from "@b64viewer/environment";

export const createAPI = () : any => {
  const app = express();
  const api = express.Router();
  const client = new redis(REDIS_URL);
  
  api.get("/ping", (_req, res) => {
    res.status(200).send(`{"status":"OK"}`);
  });

  api.get("/base64ToImage", async (req, res) => {
    const ip = req.query.ip as string;
    const port = req.query.port;

    if (await client.exists(`${ip}:${port}`)) {
      res.status(200).set({'Content-Type': 'image/png'}).send(Buffer.from(String(await client.get(`${ip}:${port}`)).split(",")[1] || "cylonemc is trash", "base64"));
      return;
    }

    mcutil.status(ip, Number(port), { timeout: 5000, enableSRV: true })
    .then(async (resp) => {
      var img = resp.favicon || "i hate jake";
      res.status(200).set({'Content-Type': 'image/png'}).send(Buffer.from(img.split(",")[1] || "cylonemc is trash", "base64"));
      await client.set(`${ip}:${port}`, String(resp.favicon));
      await client.expire(`${ip}:${port}`, 1800);
    }).catch((err) => {
        console.log(err);
    });
  });


  api.get("*", (_req, res) => {
    res.status(404).send("Not Found");
  });

  api.get("/", (_req, res) => {
    res.status(200).send("You shouldn't be here, uh uh..")
  });

  app.use("/", api);
  
  return app;
};

export const generateTID = () => {
  var tID = "";
  var charset = "ABCDEF1234567890";
  for (var i = 0; i < 30; i++) {
    tID += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return tID;
};
