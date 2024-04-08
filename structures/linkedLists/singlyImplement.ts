class Node {
    public value: any;
    public next: Node | null;

    constructor(value: any) {
        this.value = value;
        this.next = null
    }
}

export default class LinkedList {

    public head: Node;
    public tail: Node;
    public length = 0;

    constructor(...values: any[]) {
        this.head = new Node(values[0]);
        this.tail = this.head;

        for(let i = 1; i < values.length; i++)
            this.append(values[i]);
    }

    public setHead(node: Node) {
        this.head = node;
    }

    public setTail(node: Node) {
        this.tail = node;
    }

    public printList() {
        let i = 1;

        for(let node = this.head; node !== null; node = node.next!) {
            console.log(`${i}: ${node.value}`);
            i++;
        }
    }

    public append(value: any) {
        let newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    public prepend(value: any) {
        let newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    public insert(index: number, value: any) {
        if(index <= 0) {
            this.prepend(value);
            return;
        }

        if(index >= this.length) { 
            this.append(value);
            return;
        }
        
        let previousNode = this.travelToNodeAtIndex(index - 1);

        let newNode = new Node(value);

        let nextNode = previousNode.next;
        previousNode.next = newNode;
        newNode.next = nextNode;

        this.length++;
    }

    public remove(index: number) {
        if(this.length <= 1) {
            throw new Error("Cannot use remove() in a single-node linked list.")
        }

        if(index <= 0) {
            this.removeHead();
            return;
        }

        if(index >= this.length - 1) {
            this.removeTail();
            return;
        }

        let previousNode = this.travelToNodeAtIndex(index - 1);
        let nextNode = previousNode.next!.next;

        previousNode.next = nextNode;
        this.length--;
    }

    private removeHead() {
        let nextNode = this.head.next;
        this.head = nextNode!;
        this.length--;
    }

    private removeTail() {
        let lastButOneNode = this.head;

        while(lastButOneNode.next?.next !== null) 
            lastButOneNode = lastButOneNode.next!;
        
        lastButOneNode.next = null;
        this.tail = lastButOneNode;
        this.length--;
    }

    private travelToNodeAtIndex(index: number) {
        let node = this.head;

        for(let i = 1; i <= index; i++) {
            node = node.next!;
        }

        return node;
    }
}