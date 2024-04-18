function quickSort(array: Array<number>, leftIndex: number, rightIndex: number) {
    let begin = leftIndex;
    let end = rightIndex;

    let pivotIndex: number = Math.floor((begin + end) / 2);
    swap(array, pivotIndex, end - 1);
    pivotIndex = end - 1;
    let pivot: number = array[pivotIndex];

    while (true) {
        while (array[leftIndex] < pivot) leftIndex++;
        while (array[rightIndex] >= pivot) rightIndex--;

        let crossedBounds: boolean = rightIndex < leftIndex;

        if(crossedBounds) {
            swap(array, leftIndex, pivotIndex);
            pivotIndex = leftIndex;
            break;
        }
        else swap(array, leftIndex, rightIndex);
    }       

    if(pivotIndex < end) quickSort(array, pivotIndex + 1, end);
    if(rightIndex > begin) quickSort(array, begin, rightIndex);
}

function swap(array: Array<number>, index1: number, index2: number): void {
    let temp: number = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

let numbers: Array<number> = [99, 44, 5, 2, 1, 0, 63, 87, 283, 4, 6];
quickSort(numbers, 0, numbers.length - 1);