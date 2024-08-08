function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            return mid; 
        } else if (array[mid] < target) {
            left = mid + 1; 
        } else {
            right = mid - 1; 
        }
    }
    return -1; 
}
const sortedArr = [1, 3, 5, 7, 9, 11];
const index = binarySearch(sortedArr, 7);
console.log(index); // Output: 3 
