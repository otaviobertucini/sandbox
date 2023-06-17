// Define a function called "memoize" that takes a function as its argument.
function memoize(fn) {
  // Create a new Map object called "cache" to store results.
  const cache = new Map();
  // Return a new Proxy object that intercepts calls to the given function.
  return new Proxy(fn, {
    // Define an "apply" handler that will be called when the function is called.
    apply(target, thisArg, args) {
      // Convert the arguments to a string so they can be used as a cache key.
      const key = args.toString();
      // If the result for these arguments is already in the cache, return it.
      if (cache.has(key)) {
        console.log("from cache");
        return cache.get(key);
      }
      // Otherwise, call the original function and store the result in the cache.
      console.log("from calc");
      const result = target.apply(thisArg, args);
      cache.set(key, result);
      return result;
    },
  });
}

// Define an expensive calculation function.
function expensiveCalculation(x, y) {
  console.log("Performing expensive calculation...");
  return x + y;
}

// Create a new memoized version of the function using memoize().
const memoizedCalculation = memoize(expensiveCalculation);

// Call the memoized function twice with the same arguments.
console.log(memoizedCalculation(1, 2)); // Output: Performing expensive calculation... 3
console.log(memoizedCalculation(1, 2)); // Output: 3 (retrieved from cache)
console.log(memoizedCalculation(1, 2)); // Output: 3 (retrieved from cache)
console.log(memoizedCalculation(1, 2)); // Output: 3 (retrieved from cache)
console.log(memoizedCalculation(1, 2)); // Output: 3 (retrieved from cache)
console.log(memoizedCalculation(1, 2)); // Output: 3 (retrieved from cache)
console.log(memoizedCalculation(1, 2)); // Output: 3 (retrieved from cache)
console.log(memoizedCalculation(1, 2)); // Output: 3 (retrieved from cache)
console.log(memoizedCalculation(1, 2)); // Output: 3 (retrieved from cache)
console.log(memoizedCalculation(1, 2)); // Output: 3 (retrieved from cache)
console.log(memoizedCalculation(1, 2)); // Output: 3 (retrieved from cache)
console.log(memoizedCalculation(1, 4)); // Output: 3 (retrieved from cache)
console.log(memoizedCalculation(1, 4)); // Output: 3 (retrieved from cache)
console.log(memoizedCalculation(1, 4)); // Output: 3 (retrieved from cache)
console.log(memoizedCalculation(1, 4)); // Output: 3 (retrieved from cache)
console.log(memoizedCalculation(1, 4)); // Output: 3 (retrieved from cache)
console.log(memoizedCalculation(1, 4)); // Output: 3 (retrieved from cache)
console.log(memoizedCalculation(4, 1)); // Output: 3 (retrieved from cache)
