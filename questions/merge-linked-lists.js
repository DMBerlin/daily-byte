/**
 * This question is asked by Apple.
 * 
 * Given two sorted linked lists, merge them together in ascending order
 * and return a reference to the merged list.
 * 
 * Ex: Given the following lists...
 * 
 * list1 = 1->2->3, list2 = 4->5->6->null, return 1->2->3->4->5->6->null
 * list1 = 1->3->5, list2 = 2->4->6->null, return 1->2->3->4->5->6->null
 * list1 = 4->4->7, list2 = 1->5->6->null, return 1->4->4->5->6->7->null
 * 
 */

const LinkedList = require('./utils/linked-list/list.class');

/**
 * @param {LinkedList} a
 * @param {LinkedList} b
 */
function merge (a, b) {
  a.printAll();
  b.printAll();
}

[
  { a: [1, 2, 3], b: [4, 5, 6] },
  { a: [1, 3, 5], b: [2, 4, 6] },
  { a: [4, 4, 7], b: [1, 5, 6] },
].forEach((test) => 
  console.log(
    merge(
      LinkedList.createFromArray(test.a),
      LinkedList.createFromArray(test.b)
    )
  )
);