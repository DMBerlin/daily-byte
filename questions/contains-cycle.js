/**
 * This question is asked by Microsoft.
 *
 * Given a linked list, containing unique numbers, return whether or not it has a cycle.
 * Note: a cycle is a circular arrangement (i.e. one node points back to a previous node)
 *
 * Ex: Given the following linked lists...
 *
 * 1->2->3->1 -> true (3 points back to 1)
 * 1->2->3 -> false
 * 1->1 true (1 points to itself)
 *
 */

const LinkedList = require('../utils/linked-list/list.class');

function containsCycle (head) {
  let node = head;
  let visited = new Map();
  // O(n)
  while (node) {
      // O(1)
      let ref = visited.get(node);
      if (ref && ref === node) {
          return true;
      } else {
          // O(1)
          visited.set(node, node);
      }
      node = node.next;
  }
  return false;
}

[
  [LinkedList.createFromArray([1, 2, 3], { circular: true }), true],
  [LinkedList.createFromArray([4, 5, 6]), false],
  [LinkedList.createFromArray([7], { circular: true }), true]
].forEach(([actual, expected]) => console.log(containsCycle(actual) === expected ? 'pass' : 'failed'));
