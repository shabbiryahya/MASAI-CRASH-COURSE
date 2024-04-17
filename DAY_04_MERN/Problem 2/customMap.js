function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}


const numbers = [1, 2, 3, 4, 5];

// Define a callback function to double each element
function double(x) {
    return x * 2;
}

// Use customMap to apply the callback function to each element
const doubledNumbers = customMap(numbers, double);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
