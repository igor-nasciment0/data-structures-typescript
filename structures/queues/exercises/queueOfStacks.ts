/* 
    Implement a first in first out (FIFO) queue using only two stacks. 
    The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

    You must use only standard operations of a stack, which means only push to top, peek/pop from top, 
    size, and is empty operations are valid.
 */

import Stack from "../../stacks/stackLinkedList";

class QueueOfStacks {

    private regularStack: Stack;
    private inverseStack: Stack;

    constructor() {
        this.regularStack = new Stack();
        this.inverseStack = new Stack();
    }

    push(x: number): void {
        this.regularStack.push(x);
    }

    pop(): number {
        while(!this.regularStack.isEmpty()) {
            this.inverseStack.push(this.regularStack.pop());
        }

        let poppedElement = this.inverseStack.pop();
        
        while(!this.inverseStack.isEmpty()) {
            this.regularStack.push(this.inverseStack.pop());
        }

        return poppedElement?.value;
    }

    peek(): number {
        while(!this.regularStack.isEmpty()){
            this.inverseStack.push(this.regularStack.pop());
        }

        let firstElement = this.inverseStack.getTop();

        while(!this.inverseStack.isEmpty()) {
            this.regularStack.push(this.inverseStack.pop());
        }

        return firstElement;
    }

    empty(): boolean {
        return this.regularStack.isEmpty();
    }
}

let myQueue = new QueueOfStacks();
myQueue.push(1);
myQueue.push(2);
myQueue.pop();
console.log(myQueue.peek());
