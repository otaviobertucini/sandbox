function heavyLoad() {
  console.log("entered heavy load");
  let i = 0;
  for (i; i < 1e10; i++) {}
  console.log("exited heavy load");
  return i;
}

async function controller() {
  console.log("entered function");
  const start = Date.now()
  const timeout = new Promise((resolve) => {
    console.log("entered timeout");
    setTimeout(() => {
      console.log("triggered timeout in ", Date.now() - start);
      resolve("timeout done");
    }, 2000);
    console.log("exited timeout");
  });
  timeout.then((res) => {
    console.log(res);
  });

  heavyLoad();

  console.log("exited function");
}
controller().then((res) => {});
