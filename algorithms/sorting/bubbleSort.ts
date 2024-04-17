function bubbleSort(array: Array<number>) {
    for(let bubblingLimit = array.length; bubblingLimit > 0; bubblingLimit--) {
        for(let index = 0; index < bubblingLimit; index++) {
            if(array[index] >  array[index + 1])
                swap(array, index, index + 1)
        }
    }
}

function swap(array : Array<number>, index1: number, index2: number) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

let array = [5, 4, 3, 2, 1]
bubbleSort(array);
console.log(array);