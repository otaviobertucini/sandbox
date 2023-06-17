function addNumbers(...numbers) {
  return numbers.reduce((sum, current) => sum + current, 0);
}

const memo = new Map();
const proxy = new Proxy(addNumbers, {
  apply: (target, thisArg, args) => {
    const memoValue = memo.get(String(args));
    if (memoValue) {
      console.log("getting from memo");
      return memoValue;
    }

    console.log("getting from calc");
    const result = target.apply(thisArg, args);
    memo.set(String(args), result);
    return result;
  },
});
const sum = (...numbers) => {
  return proxy(...numbers);
};

const numbersArray = [1, 2, 3, 4, 5];
console.log(sum(1, 2));
console.log(sum(1, 2));
console.log(sum(1, 2));
console.log(sum(1, 3));
console.log(sum(1, 3));
console.log(sum(1, 3));
console.log(sum(1, 3));
console.log(sum(1, 3));
console.log(sum(1, 3));
console.log(sum(1, 3));
console.log(sum(1, 3));
console.log('memo ', memo);
