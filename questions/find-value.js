/**
 * This question is asked by Google.
 * 
 * Given the reference to the root of a binary search tree and a search value,
 * return the reference to the node that contains the value if it exists and null otherwise.
 * 
 * Note: all values in the binary search tree will be unique.
 * 
 * Ex: Given the tree...
 *      3
 *     / \
 *    1   4
 * and the search value 1 return a reference to the node containing 1.
 * 
 * Ex: Given the following tree...
 *      7
 *     / \
 *    5   9
 *       / \ 
 *      8   10
 * and the search value 9 return a reference to the node containing 9.
 * 
 * Ex: Given the following tree...
 *      8
 *     / \
 *    6   9
 * and the search value 7 return null.
 * 
 */

const { binaryTree } = require('../utils/tree/tree.factory');

function searchBST (root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  if (val > root.val) return searchBST(root.right, val);
  if (val < root.val) return searchBST(root.left, val);
}

[
  [binaryTree.createFromArray([3,1,4]), 1, 1],
  [binaryTree.createFromArray([7, 5, 9, 8, 10]), 9, 9],
  [binaryTree.createFromArray([8, 6, 9]), 7, null]
].forEach(([actual, test, expected]) => console.log(searchBST(actual, test) === expected ? 'pass' : 'fail'));