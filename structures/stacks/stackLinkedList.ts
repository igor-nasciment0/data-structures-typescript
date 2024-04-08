class Node {
    public value: any;
    public next: Node | null;

    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

export default class Stack {

    private top: Node | null;
    public length: number; 

    constructor() {
        this.top = null;
        this.length = 0; 
    }

    public getTop() {
        return this.top?.value;
    }

    public push(value: any) {
        let newNode = new Node(value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
    }

    public pop() {
        let holdingTopPointer = this.top;

        if(!holdingTopPointer) 
            return;

        let nextTopNode = this.top?.next;
        
        if(nextTopNode)
            this.top = nextTopNode;
        else
            this.top = null;

        if(this.length)
            this.length--;

        return holdingTopPointer.value;
    }

    public isEmpty() {
        return this.top === null;
    }
}