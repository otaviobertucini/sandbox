const start = Date.now();

setTimeout(() => {
    console.log("timer 1", Date.now() - start)
}, 1000);
setTimeout(() => {
    console.log("timer 2", Date.now() - start)
}, 1000);
setTimeout(() => {
    console.log("timer 3", Date.now() - start)
}, 1000);
setTimeout(() => {
    console.log("timer 4", Date.now() - start)
}, 1000);