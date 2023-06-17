const express = require("express");

const app = express();
const greet = express.Router();

function heavyLoad() {
  console.log("entered heavy load");
  let i = 0;
  for (i; i < 1e10; i++) {}
  console.log("exited heavy load");
  return i;
}

app.get("/heavy", (req, res) => {
  console.log(req.baseUrl);
  heavyLoad();
  res.send("Hello World");
});

app.use("/fast", (req, res) => {
  res.send("I'm fast");
});

app.listen(2001, () => console.log("server started"));
