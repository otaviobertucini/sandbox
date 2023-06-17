const services = [1, 1, 1]


const value = services.reduce((acc, service) => {
    acc = +service;
    return acc;
}, 0);
console.log(`🚀 ~ file: sla.js:4 ~ value ~ value:`, value)