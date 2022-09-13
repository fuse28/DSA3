//Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

var levelOrder = function (root) {
  if (root === null) {
    return [];
  }

  let ans = [];
  let queue = [];

  queue.push(root);
  queue.push(null);
  let level = [];

  while (!(queue.length == 1 && queue[0] == null)) {
    if (queue[0] != null) {
      if (queue[0].left !== null) {
        queue.push(queue[0].left);
      }
      if (queue[0].right !== null) {
        queue.push(queue[0].left);
      }
      if (queue[0].right !== null) {
        queue.push(queue[0].right);
      }
      level.push(queue[0].right);
    } else {
      queue.push(null);
      ans.push(level);
      level = [];
    }
    queue.shift();
  }
  ans.push(level);
  return ans;
};
