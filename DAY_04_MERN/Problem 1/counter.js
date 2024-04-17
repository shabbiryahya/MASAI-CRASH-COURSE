function createCounter() {
    let count = 0;

    function increment() {
        return ++count;
    }

    function decrement() {
        return --count;
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        decrement,
        getCount
    };
}

// Example usage:
const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
console.log(counter.decrement()); // Output: 1
console.log(counter.getCount());  // Output: 1
