class Node {
    public value: any;
    public next: Node | null;

    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

export default class Queue {
    private first: Node | null;
    private last: Node | null;

    public getFirstItem() {
        return this.first;
    }

    public getLastItem() {
        return this.last;
    }

    public enqueue(value: any) {
        let newNode = new Node(value);

        if (!this.last) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
    }

    public dequeue() {
        let holdingFirstItem = this.first;

        if (this.first == this.last)
            this.last = null;

        if (this.first)
            this.first = this.first.next;

        return holdingFirstItem;
    }

    public isEmpty() {
        return this.first === null;
    }
}