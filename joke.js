const crypto = require("crypto");
const fs = require("fs");
process.env.UV_THREADPOOL_SIZE = 2;

const start = Date.now();

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("crypto 1 ended ", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("crypto 2 ended ", Date.now() - start);
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("crypto 3 ended ", Date.now() - start);
});

fs.readFile("./A.csv", {}, () => {
  console.log("file read");
});

crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
  console.log("crypto 4 ended ", Date.now() - start);
});

// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("crypto 5 ended ", Date.now() - start);
// });

// crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
//   console.log("crypto 6 ended ", Date.now() - start);
// });
