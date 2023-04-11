/**
 * This question is asked by Apple.
 * 
 * Given two sorted linked lists, merge them together in ascending order
 * and return a reference to the merged list.
 * 
 * Ex: Given the following lists...
 * 
 * a = 1->2->3, b = 4->5->6->null, return 1->2->3->4->5->6->null
 * a = 1->3->5, b = 2->4->6->null, return 1->2->3->4->5->6->null
 * a = 4->4->7, b = 1->5->6->null, return 1->4->4->5->6->7->null
 * 
 */

const LinkedList = require('./utils/linked-list/list.class');

/**
 * @param {LinkedList} a
 * @param {LinkedList} b
 */
function merge (a, b) {
  let head = new LinkedList();
  let tail = head;

  // Iterate over the two lists and append values to the result list.
  while (a && b) {
    if (a.data < b.data) {
        tail.next = a;
        a = a.next;
    } else {
        tail.next = b;
        b = b.next;
    }        
    tail = tail.next;
  }
  
  // Check if there is left over nodes on any list.
  // Append it to the end of the result list.
  if (a) tail.next = a;
  if (b) tail.next = b;
  
  return head.next;
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
    ).printAll()
  )
);