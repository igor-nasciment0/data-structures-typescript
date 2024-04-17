function selectionSort(array: Array<number>) {
    for(let index = 0; index < array.length; index++) {
        let smallestValueIndex = index;

        for(let i = index; i < array.length; i++) {
            if (array[i] < array[smallestValueIndex])
                smallestValueIndex = i;
        }

        if(smallestValueIndex != index)
            swap(array, index, smallestValueIndex);
    }
}

function swap(array : Array<number>, index1: number, index2: number) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

let array = [5, 4, 3, 2, 1]
selectionSort(array);
console.log(array);