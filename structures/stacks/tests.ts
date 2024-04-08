import Stack from "./stackLinkedList";

let stack = new Stack();
stack.push('google');
stack.push('udemy');
stack.pop();
stack.pop();
console.log(stack.isEmpty());