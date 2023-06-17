const express = require("express");
const bullmq = require("bullmq");
const { Queue } = bullmq;

const app = express();

const queue = new Queue("Loads", {
  connection: {
    host: "127.0.0.1",
    port: "6379",
  },
});

app.get("/heavy", async (req, res) => {
  console.log(req.baseUrl);

  await queue.add("heavyLoad", 1e10);

  res.json({ processing: true });
});

app.use("/fast", (req, res) => {
  res.send("I'm fast");
});

app.listen(2001, () => console.log("server started"));
