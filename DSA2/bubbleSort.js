function bubbleSort(array) {
    for (let i = 0; i < array.length ; i++) {
        for (let j = i + 1 ; j < array.length; j++) {
            if(array[i] > array[j]){
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp 
            }
        }
    }

    return array
} 

const array = [41,58,86,75,11,24,10,1,53,62]

console.log(bubbleSort(array));  