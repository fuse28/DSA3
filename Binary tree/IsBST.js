//Given a binary tree, check if it is a binary search tree

function isBST(root, min, max) {
  if (root == null) {
    return true;
  }
  if (root.value < max && root.value > min) {
    return (
      isBST(root.left, min, root.value) && isBST(root.right, root.value, max)
    );
  } else {
    return false;
  }
}

var isValidBST = function (root) {
  return isBST(root, -100000000, 100000000);
};
