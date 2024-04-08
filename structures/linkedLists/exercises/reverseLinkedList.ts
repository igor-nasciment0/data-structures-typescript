/* 
    Exercise: given a linked list, reverse it
*/

import LinkedList from "../singlyImplement";

function reverseList(linkedList: LinkedList) {
    let node = linkedList.head;
    let nextNode = node.next;
    node.next = null;
    linkedList.setTail(node);  

    while(nextNode !== null) {
        let afterNode = nextNode.next;
        nextNode.next = node;

        node = nextNode;
        nextNode = afterNode;
    }

    linkedList.setHead(node);
}

let myLinkedList = new LinkedList(1, 2, 3, 4, 5);
reverseList(myLinkedList);
myLinkedList.printList();