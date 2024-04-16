function reverseString(string: string) {
    if(string.length > 2) 
        return reverseString(string.substring(Math.floor(string.length/2))) +
               reverseString(string.substring(0, Math.floor(string.length/2))) 
    
    if(string[1])
        return string[1] + string[0];
    else
        return string[0];
}

let reversed = reverseString('quero ver outra vez seus olhinhos de noite serena');
console.log(reversed);