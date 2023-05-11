/**
 * Given a binary search tree, rearrange the tree such
 * that it forms a linked list where all its values are in ascending order.
 * 
 * Ex: Given the following tree...
 *     5
 *    / \
 *   1   6
 *  return...
 * 1
 *  \
 *   5
 *    \
 *     6
 * 
 * Ex: Given the following tree...
 *       5
 *      / \
 *     2   9
 *    / \ 
 *  1   3 
 * return...
 * 1
 *  \
 *   2
 *    \
 *     3
 *      \
 *       5
 *        \
 *         9
 * 
 * Ex: Given the following tree...
 * 5
 *  \
 *   6
 * return...
 * 5
 *  \
 *   6
 */

const LinkedList = require('../utils/linked-list/list.class');

const list = new LinkedList();

function flatten (root) {
  // Morris Traversal
  let curr = root;
    while (curr) {
        if (curr.left) {
            let runner = curr.left;
            while (runner.right) runner = runner.right;
            runner.right = curr.right;
            curr.right = curr.left;
            curr.left = null;
        }
        curr = curr.right;
    }
}