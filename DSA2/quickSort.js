function quickSort(array) {
    if(array.length <= 1){
        return array
    }

    let pivot  = array[Math.floor(array.length / 2)] 
    let left = []
    let right = []
    let middle = [] 

    for (let i = 0; i < array.length; i++) {
        if(array[i] < pivot ){
            left.push(array[i])
        }else if (array[i] > pivot){ 
            right.push(array[i])
        }else{
            middle.push(array[i])
        }
    }
    return [...quickSort(left) , ...middle , ...quickSort(right)] 
}


const array = [-6, 20, 8, -2, 4]
console.log(quickSort(array));  