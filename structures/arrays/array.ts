export default class Array {

    public length: number;

    constructor(...elements: any) {
        this.length = elements.length;
        for (let i = 0; i < elements.length; i++)
            this[i] = elements[i];
    }

    push(element: any): number {
        this[this.length] = element;
        this.updateLength();
        return this.length;
    }

    pop() {
        const lastItem = this[this.length - 1];
        delete this[this.length - 1];
        this.updateLength();
        return lastItem;
    }

    insert(element: any, index: number) {
        this.shiftElementsUp(index + 1);
        this[index] = element;
    }

    delete(index : number) {
        this.shiftElementsDown(index);
    }

    private updateLength() {
        this.length = Object.keys(this).length - 1;
    }

    private shiftElementsUp(startIndex: number) {
        let thisArray = { ...this };
        for(let i = startIndex; i < this.length; i++) {
            this[i] = thisArray[i - 1];
        }
        this[this.length] = thisArray[this.length - 1];
        this.updateLength();
    }

    private shiftElementsDown(startIndex : number) {
        let thisArray = {...this};
        for(let i = startIndex; i < this.length; i++) {
            this[i] = thisArray[i + 1];
        }
        delete this[this.length - 1];
        this.updateLength();
    }
}