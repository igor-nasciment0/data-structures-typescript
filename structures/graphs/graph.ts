export default class Graph {
    
    private numberOfNodes: number;
    private adjacentList: Object;
    
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    public addVertex(node: number | string) {
        if(!this.adjacentList[node])
            this.numberOfNodes++;

        this.adjacentList[node] = [];
    }

    public addEdge(node1 : number | string, node2 : number | string) {
        if(!this.adjacentList[node1] || !this.adjacentList[node2])
            throw new Error("Inexistent node");

        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }
}