/**
 * This question is asked by Apple.
 *
 * Given a potentially cyclical linked list where each value is unique, return the node at which the cycle starts.
 *
 * If the list does not contain a cycle, return null.
 *
 * Ex: Given the following linked lists...
 *
 * 1->2->3, return null
 * 1->2->3->4->5->2 (5 points back to 2), return a reference to the node containing 2
 * 1->9->3->7->7 (7 points to itself), return a reference to the node containing 7
 *
 */

const LinkedList = require('../utils/linked-list/list.class');

function returnCycle (list) {
  let node = list.head;
  let map = new Map();

  while (node) {
      if (map.has(node)) {
          return map.get(node).data;
      } else {
          map.set(node, node);
          node = node.next;
      }
  }
  return null;
}

[
  [LinkedList.createFromArray([1, 2, 3]), null],
  [LinkedList.createFromArray([1, 2, 3, 4, 5], { encycleListAt: 2 }), 2],
  [LinkedList.createFromArray([1, 9, 3, 7], { encycleListAt: 7 }), 7]
].forEach(([ actual, expected ]) => console.log(returnCycle(actual) === expected ? 'pass' : 'fail'));
