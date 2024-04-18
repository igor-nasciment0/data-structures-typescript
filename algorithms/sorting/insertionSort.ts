function insertionSort(array: Array<number>) {
    for (let i = 1; i < array.length; i++) {
        let elementIndex = i;
        let previousElementIndex = i - 1;

        while (array[previousElementIndex] > array[elementIndex]) {
            swap(array, elementIndex, previousElementIndex)
            elementIndex--;
            previousElementIndex--;
        }
    }
}

function swap(array: Array<number>, index1: number, index2: number) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

let array = [5, 4, 3, 2, 1]
insertionSort(array);
console.log(array);