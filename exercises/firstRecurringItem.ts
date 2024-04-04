/* 
    Google Question
    Given an array, return the first item that repeats

    Input: [2,5,1,2,3,5,1,2,4]:
    Output: 2
*/

import HashTable from "../structures/hashTable.ts";

function firstRecurringElement(input : Array<number>) {
    let hashTable = new HashTable(20);

    for(let item of input) {
        let alreadySeen = hashTable.get(String(item));

        if(alreadySeen) {
            return item;
        } else {
            alreadySeen = true;
        }        

        hashTable.set(String(item), alreadySeen);
    }
}

console.log(
    firstRecurringElement([2,5,5,2,3,5,1,2,4]) // Output: 5
);
