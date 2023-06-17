console.log("entrei");

const timeout = new Promise((resolve, reject) => {
  console.log("entrei pro");
  setTimeout(() => {
    console.log("estourei");
    resolve("oie estourado");
  }, 0);
  console.log("sai");
});

timeout.then((res) => {
  console.log(res);
});

const wait = new Promise((resolve, reject) => {
  console.log("entrei pro");
  // for (i = 0; i < 1e9; i++) {}
  console.log("sai");
  resolve("oie");
});

wait.then((res) => {
  console.log(res);
});

console.log("here1");

const wait1 = new Promise((resolve, reject) => {
  console.log("entrei pro1");
  setTimeout(() => {
    resolve("meu");
  }, 2000);
  console.log("sai1");
});

console.log("here2");
const wait2 = new Promise((resolve, reject) => {
  console.log("entrei pro2");
  setTimeout(() => {
    resolve("amigo");
  }, 3000);
  console.log("sai2");
});
console.log("here3");

wait1.then((res) => {
  console.log(res);
});
wait2.then((res) => {
  console.log(res);
});
