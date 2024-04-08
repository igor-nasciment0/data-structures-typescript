export default class Stack {
    
    private stack: Array<any>;

    constructor() {
        this.stack = [];
    }

    public getTop() {
        return this.stack[this.stack.length - 1];
    }

    public push(value: any) {
        this.stack.push(value);
        return this;
    }

    public pop() {
        this.stack.pop();
    }

    public isEmpty() {
        return this.stack.length === 0;
    }
}