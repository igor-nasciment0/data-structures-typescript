class Node {
    public value: number;
    public frequency = 1;
    public left: Node | null;
    public right: Node | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export default class BinarySearchTree {

    public root: Node | null;

    constructor(...values: Array<number>) {
        this.root = null;

        for(let element of values)
            this.insert(element);
    }

    private nextNode(node: Node, value: number) {
        if (value > node.value)
            return node.right;
        else if (value < node.value)
            return node.left;
        else
            return node;
    }

    public insert(value: number) {
        let newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let node = this.root;
        let nextNode = this.nextNode(this.root, value);

        while (nextNode !== null && nextNode !== node) {
            node = nextNode;
            nextNode = this.nextNode(node, value);
        }

        this.connectNode(node, newNode);

        return this;
    }

    public lookup(value: number) {
        if(!this.root)
            return null;

        let node = this.root;
        let nextNode = this.nextNode(node, value);

        while (true) {
            if(nextNode === node) 
                return node;

            if(!nextNode)
                return null;

            node = nextNode;
            nextNode = this.nextNode(node, value);
        }
    }

    public remove(value: number) {
        let removeNode = this.root;
        let previousNode: Node;

        while(true) {
            if(!removeNode) 
                return null;

            let nextNode = this.nextNode(removeNode, value);

            if(nextNode === removeNode)
                break;

            previousNode = removeNode;
            removeNode = nextNode;
        }     
        
        let substituteNode = this.findSucessor(removeNode);

        if(!substituteNode) {
            this.cutRelationship(previousNode!, removeNode);

            if(removeNode.left)
                this.connectNode(previousNode!, removeNode.left);

            return removeNode;
        }

        if(removeNode === this.root)
            this.root = substituteNode;
        else
            this.connectNode(previousNode!, substituteNode);

        substituteNode.left = removeNode.left;
        substituteNode.right = removeNode.right;

        return removeNode;
    }

    private findSucessor(node: Node) {
        let value = node.value + 1;

        let previousNode = node;
        let sucessor = this.nextNode(node, value);
        if(!sucessor)
            return null;

        while (true) {
            let nextNode = this.nextNode(sucessor, value);

            if(sucessor.value === value || !nextNode) {
                this.cutRelationship(previousNode, sucessor);
                return sucessor;
            }   

            previousNode = sucessor;
            sucessor = nextNode;
        }
    }

    private cutRelationship(parentNode: Node, childNode: Node) {
        if(parentNode.left === childNode) 
            parentNode.left = null;

        if(parentNode.right === childNode)
            parentNode.right = null;
    }

    private connectNode(parentNode: Node, node: Node) {
        if(node.value > parentNode.value)
            parentNode.right = node;
        else
        if(node.value < parentNode.value)
            parentNode.left = node;
        else
            parentNode.frequency++;
    }
}