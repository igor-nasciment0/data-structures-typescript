function fibonacciRecursive(index: number) { 
    if(index <= 0) return 0;
    else if(index == 1) return 1;

    return fibonacciRecursive(index - 1) + fibonacciRecursive(index - 2);
}

function fibonacciIterative(index: number) {
    let number1 = 0;
    let number2 = 1;
    let answer = 0;

    for(let i = 2; i <= index; i++) {
        answer = number1 + number2;
        number1 = number2;
        number2 = answer;
    }
    
    return answer;
}

let x = fibonacciIterative(8);
console.log(x);