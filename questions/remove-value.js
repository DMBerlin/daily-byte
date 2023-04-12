/**
 * This question is asked by Google.
 * 
 * Given a linked list and a value, remove all nodes containing the provided value,
 * and return the resulting list.
 * 
 * Ex: Given the following linked lists and values...
 * 
 * 1->2->3->null, value = 3, return 1->2->null
 * 8->1->1->4->12->null, value = 1, return 8->4->12->null
 * 7->12->2->9->null, value = 7, return 12->2->9->null
 * 
 */

const LinkedList = require('./utils/linked-list/list.class');
const isEqual = require('./utils/linked-list/list.helpers');

function remove(head, val){
  const dummy = new LinkedList();
  dummy.head = head;

  while (head) {
    if (head.next && head.data === val) {
      head.data = head.next.data;
      head.next = head.next.next;
      return;
    } else if (head.next && head.next.next && head.next.data === val) {
      head.next = head.next.next;
      return;
    } else if (!head.next && head.data === val) {
      head = null;
      return;
    }
    head = head.next;
  }

  return dummy.next;
}

[
  { actual: LinkedList.createFromArray([1, 2, 3]), value: 1, expected: LinkedList.createFromArray([2, 3]) },
  { actual: LinkedList.createFromArray([1, 2, 3]), value: 3, expected: LinkedList.createFromArray([1, 2]) },
  { actual: LinkedList.createFromArray([8, 1, 1, 4, 12]), value: 1, expected: LinkedList.createFromArray([8, 4, 12]) },
  { actual: LinkedList.createFromArray([7, 12, 2, 9]), value: 7, expected: LinkedList.createFromArray([12, 2, 9]) },
].forEach((test) => console.log(isEqual(remove(test.actual, test.value), test.expected)));