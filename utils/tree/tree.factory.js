class TreeNode {
  constructor (val = null, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor (head = null) {
    this.head = head;
  }

  add (num, ref) {
    if (ref) {
      if (typeof ref.val === 'number' && ref.val > num) {
        this.add(num, ref.left);
      } else if (typeof ref.val === 'number' && ref.val < num) {
        this.add(num, ref.right);
      }
    } else {
      ref = new TreeNode(num);
    }
  }
}


function createFromArray (numsArray) {
  const tree = new Tree();
  numsArray.forEach((num) => tree.add(num, tree.head));
  return tree;
}

const binaryTree = {
  createFromArray,
}

module.exports = {
  binaryTree,
}