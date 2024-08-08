function mergeSort(array){
    if(array.length < 2){
        return array
    }

    const mid = Math.floor(array.length / 2)
    const leftArray = array.slice(0,mid)
    const rightArray = array.slice(mid)

    return merge( mergeSort(leftArray) , mergeSort(rightArray))
}

function merge(leftArray, rightArray){
    const sortedArray = []

    while(leftArray.length && rightArray.length){
        if(leftArray[0] <= rightArray[0]){
            sortedArray.push(leftArray.shift())
        }else{
            sortedArray.push(rightArray.shift()) 
        }
    }
    return [...sortedArray, ...leftArray, ...rightArray]
}

const array = [-2, 8, 1, -5, 9, 57]
console.log(mergeSort(array)); 