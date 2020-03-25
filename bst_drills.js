const BinarySearchTree = require("./bst");

function main() {
  const BST = new BinarySearchTree();

  BST.insert(3, 3);
  BST.insert(1, 1);
  BST.insert(4, 4);
  BST.insert(6, 6);
  BST.insert(9, 9);
  BST.insert(2, 2);
  BST.insert(5, 5);
  BST.insert(7, 7);
  console.log(BST);

  const newBST = new BinarySearchTree();

  newBST.insert("E", "E");
  newBST.insert("A", "A");
  newBST.insert("S", "S");
  newBST.insert("Y", "Y");
  newBST.insert("Q", "Q");
  newBST.insert("U", "U");
  newBST.insert("E", "E");
  newBST.insert("S", "S");
  newBST.insert("T", "T");
  newBST.insert("I", "I");
  newBST.insert("O", "O");
  newBST.insert("N", "N");
  console.log(newBST);

  console.log(tree(BST))
  console.log("height", bstHeight(BST))
  console.log(checkBST(BST))
  console.log(nthLargest(BST, 3));
}

main();

//This function returns the sum of all values within the tree. It will have runtime O(n),
//since it will be called once on every node within the tree.
function tree (t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

function bstHeight(t, counter = 0) {
  if (!t)
  {
    return 0;
  }
  counter++;
  let leftCounter = counter;
  let rightCounter = counter;
  if (t.left)
  {
    leftCounter = bstHeight(t.left, counter);
  }
  if (t.right)
  {
    rightCounter = bstHeight(t.right, counter);
  }
  return Math.max(leftCounter, rightCounter);
};

function checkBST(node) {
  if (node == null) {
    return true;
  } else if (node.left && node.left.value > node.value) {
    return false;
  } else if (node.right && node.right.value < node.value) {
    return false;
  }
  let right = checkBST(node.right);
  let left = checkBST(node.left);
  if (right && left) {
    return true;
  }
  return false;
}

function nthLargest(node, num) {
  let count = 0;
  let resultNode;
  const counter = foundNode => {
    count++;
    if (count === num) {
      return (resultNode = foundNode.value);
    }
  };
  function reverse(node, cb) {
    if (node.right !== null) {
      reverse(node.right, cb);
    }
    cb(node);
    if (node.left !== null) {
      reverse(node.left, cb);
    }
  }

  reverse(node, counter);

  return resultNode;
}
