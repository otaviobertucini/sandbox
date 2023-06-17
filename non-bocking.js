const { Worker } = require("worker_threads");
const express = require("express");

const app = express();

app.get("/heavy", async (req, res) => {
  console.log(req.baseUrl);

  const heavy_load_response = await new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js");
    worker.postMessage(1e10);

    worker.on("message", resolve);
    worker.on("error", reject);
  });

  res.send(heavy_load_response);
});

app.use("/fast", (req, res) => {
  res.send("I'm fast");
});

app.listen(2001, () => console.log("server started"));
