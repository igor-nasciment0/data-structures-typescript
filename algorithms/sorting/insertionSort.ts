function insertionSort(array: Array<number>) {
    for (let i = 1; i < array.length; i++) {
        let element = array[i];
        let previousElementIndex = i - 1;

        while(true) {
            if(array[previousElementIndex - 1] > element)
                previousElementIndex--;
            else
                break;
        }

        if (array[previousElementIndex] > element) 
            moveElement(array, previousElementIndex, element, i);
    }
}

function moveElement(array: Array<number>, previousIndex: number, element: number, elementIndex: number) {
    array.splice(previousIndex, 0, element);
    array.splice(elementIndex + 1, 1);
}

let array = [5, 4, 3, 2, 1]
insertionSort(array);
console.log(array);