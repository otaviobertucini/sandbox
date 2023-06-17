const http = require("http");

async function makeRequest() {
  console.log("entered request");
  return new Promise((resolve) => {
    http
      .request("http://www.google.com", (res) => {
        res.on("data", (data) => {});
        res.on("end", () => {
          console.log("exited request");
          resolve("request");
        });
      })
      .end();
  });
}

async function controller() {
  console.log("entered function");
  const timeout = new Promise((resolve) => {
    console.log("entered timeout");
    setTimeout(() => {
      console.log("triggered timeout");
      resolve("timeout done");
    }, 0);
    console.log("exited timeout");
  });
  timeout.then((res) => {
    console.log(res);
  });

  const request = await makeRequest();

  console.log("exited function");
}
controller().then((res) => {});
