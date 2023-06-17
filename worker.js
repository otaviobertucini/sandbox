const { parentPort } = require("worker_threads");

function heavyLoad(number) {
  console.log("entered heavy load");
  let i = 0;
  for (i; i < number; i++) {}
  console.log("exited heavy load");
  return i;
}

parentPort.on("message", (message) => {
  heavyLoad(Number(message));

  parentPort.postMessage('Done heavy load!');
});
