import Queue from "./queue";

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.isEmpty());

console.log(myQueue);