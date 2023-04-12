/**
 * This question is asked by Facebook.
 * 
 * Given a linked list and a value n, remove the nth to last node and return the resulting list.
 * 
 * Ex: Given the following linked lists...
 * 
 * 1->2->3->null, n = 1, return 1->2->null
 * 1->2->3->null, n = 2, return 1->3->null
 * 1->2->3->null, n = 3, return 2->3->null
 * 
 */

const LinkedList = require('./utils/linked-list/list.class');

function remove(list, n) {
  let dummy = new LinkedList();
  dummy.next = list.head;
  let left = dummy;
  let right = list;

  // Shift the right pointer by N to the right from
  // the beggining of the list.
  while (n > 0 && right) {
    right = right.next;
    n--;
  }

  // Traverse with both right and left pointer
  // until right pointer reaches the end of the list.
  while (right) {
    left = left.next;
    right = right.next;
  }

  // Left pointer should be at the Nth position
  // of the list. Remove it.
  left.next = left.next.next;

  // Return the beggining of the list.
  return dummy.next;
}

[
  { list: [1, 2, 3, 4, 5], n: 1 },
  { list: [1, 2, 3, 4, 5], n: 2 },
  { list: [1, 2, 3, 4 ,5], n: 3 },
].forEach((test) => console.log(remove(LinkedList.createFromArray(test.list), test.n)));