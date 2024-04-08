import LinkedList from "./singlyImplement.ts";

let myLinkedList = new LinkedList(17);
myLinkedList.append(1);
myLinkedList.prepend(2);
myLinkedList.insert(0, 4);
myLinkedList.remove(0);

myLinkedList.printList();