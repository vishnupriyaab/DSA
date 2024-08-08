// Factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; 
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120 (5 * 4 * 3 * 2 * 1)


// Fibonacci Sequence
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2); 
}
console.log(fibonacci(6)); // Output: 8 (0, 1, 1, 2, 3, 5, 8)


// Reverse a String
function reverseString(str) {
    if (str === "") {
        return ""; 
    }
    return reverseString(str.substring(1)) + str[0]; 
}
console.log(reverseString("hello")); // Output: "olleh"


// Sum of Array Elements
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1)); 
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15 (1 + 2 + 3 + 4 + 5)


// Power of a Number
function power(base, exponent) {
    if (exponent === 0) {
        return 1; 
    }
    return base * power(base, exponent - 1); 
}
console.log(power(2, 3)); // Output: 8 (2^3)
