function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i; 
        }
    }
    return -1;
}
const arr = [3, 5, 7, 9, 11];
const index = linearSearch(arr, 7);
console.log(index); // Output: 2 
