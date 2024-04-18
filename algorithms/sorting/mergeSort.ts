function mergeSort(array: Array<number>) {
  if (array.length === 1) {
    return array
  }

  let left = array.slice(0, Math.floor(array.length / 2));
  let right = array.slice(Math.floor(array.length / 2));

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left: Array<number>, right: Array<number>) {
  let mergedArray: Array<number> = [];

  let leftIndex: number = 0;
  let rightIndex: number = 0;

  while (leftIndex < left.length || rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex] || right[rightIndex] === undefined) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    }
    else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }     
  }

  return mergedArray;
}

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const answer = mergeSort(numbers);
console.log(answer);