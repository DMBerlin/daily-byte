/**
 * This question is asked by Facebook.
 * Given a linked list, containing unique values, reverse it, and return the result.
 *
 * Ex: Given the following linked lists...
 *
 * 1->2->3->null, return a reference to the node that contains 3 which points to a list that looks like the following: 3->2->1->null
 * 7->15->9->2->null, return a reference to the node that contains 2 which points to a list that looks like the following: 2->9->15->7->null
 * 1->null, return a reference to the node that contains 1 which points to a list that looks like the following: 1->null
 *
 */

const LinkedList = require('../utils/linked-list/list.class');
const isTwoListsEqual = require('../utils/linked-list/list.helpers');

function reverseList (head) {
  let [prev, current] = [null, head];

  while(current) {
    [current.next, prev, current] = [prev, current, current.next];
  }

  return prev;
}

[
  [LinkedList.createFromArray([1, 2, 3]), LinkedList.createFromArray([3, 2, 1])],
  [LinkedList.createFromArray([7, 15, 9, 2]), LinkedList.createFromArray([2, 9, 15, 7])],
  [LinkedList.createFromArray([1]), LinkedList.createFromArray([1])]
].forEach(([ actual, expected]) => console.log(isTwoListsEqual(reverseList(actual), expected) ? 'pass': 'fail'));
