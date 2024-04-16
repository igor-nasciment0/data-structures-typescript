function findFactorialRecursive(number: number) {
    if(number <= 1)
        return 1;

    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number: number) {
    let factorial = 1;

    for(let i = 2; i <= number; i++) {
        factorial *= i;
    }

    return factorial;
}

let factorial = findFactorialIterative(5);
console.log(factorial);