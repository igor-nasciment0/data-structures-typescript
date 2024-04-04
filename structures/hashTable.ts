export default class HashTable {
    public data : Array<any>;

    constructor(size : number) {
        this.data = new Array(size);
    }

    private hash(key : string) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    public set(key : string, value : any) {
        let index = this.hash(key);
        if (!this.data[index]) {
            this.data[index] = [];
        }

        this.data[index].push([key, value]);
    }

    public get(key : string) {
        let address = this.data[this.hash(key)];

        if(!address)
            return undefined;

        for (let node of address) {
            if (node[0] === key)
                return node[1];
        }
    }

    keys() {
        let hashTableKeys = [];

        for (let address of this.data) {
            if (address) {
                this._getKeysFromAddress(address, hashTableKeys);
            }
        }

        return hashTableKeys;
    }

    private _getKeysFromAddress(address : Array<any>, hashTableKeys : Array<any>) {
        for (let node of address) {
            hashTableKeys.push(node[0]);
        }
    }
}