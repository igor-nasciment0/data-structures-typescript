import BinarySearchTree from "./BST";

let myTree = new BinarySearchTree(20, 10, 30, 5, 15, 25, 35);

console.log(myTree.remove(31));

console.dir(myTree, {depth: undefined});