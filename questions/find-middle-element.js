/**
 * This question is asked by Amazon.
 *
 * Given a non-empty linked list, return the middle node of the list.
 * If the linked list contains an even number of elements, return the node closer to the end.
 *
 * Ex: Given the following linked lists...
 *
 * 1->2->3->null, return 2
 * 1->2->3->4->null, return 3
 * 1->null, return 1
 *
 */

const LinkedList = require('../utils/linked-list/list.class');

function findMiddle ({ head }) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow.data;
}

[
  { actual: LinkedList.createFromArray([1, 2, 3]), expected: 2 },
  { actual: LinkedList.createFromArray([1, 2, 3, 4]), expected: 3 },
  { actual: LinkedList.createFromArray([1]), expected: 1 },
].forEach((test) => console.log(findMiddle(test.actual) === test.expected));
