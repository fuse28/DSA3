class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
let root = null;

function addNode(value) {
  if (root === null) {
    root = new Node(value);
  } else {
    let isValuedPlaced = false;
    while (!isValuedPlaced) {
      let temp = root;
      if (temp.value < value) {
        if (temp.left === null) {
          temp.left = new Node(value);
          isValuedPlaced = true;
        } else {
          temp = temp.left;
        }
      } else {
        if (temp.right === null) {
          temp.right = new Node(value);
          isValuedPlaced = true;
        } else {
          temp = temp.right;
        }
      }
    }
  }
}
