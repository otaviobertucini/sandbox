const bullmq = require("bullmq");
const { Worker } = bullmq;

async function processJob(job) {
  if (job.name === "heavyLoad") {
    console.log("entered heavy load");
    let i = 0;
    for (i; i < job.data; i++) {}
    console.log("exited heavy load");
    return i;
  }
}

const worker = new Worker("Loads", processJob, {
  connection: {
    host: "127.0.0.1",
    port: "6379",
  },
  concurrency: 1,
});

worker.on("completed", (job, result) => {
  console.log(result);
});
