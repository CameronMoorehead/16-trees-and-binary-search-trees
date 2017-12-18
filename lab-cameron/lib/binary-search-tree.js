'use strict';

const BinarySearchTree = function() {
  const Node = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };

  let root = null;

  this.insert = value => {
    if (typeof value !== 'number') {
      throw new TypeError('value should be a number');
    }

    let newNode = new Node(value);

    const insertValue = (node, newNode) => {
      if (node.value >= newNode.value) {
        if (!node.left) {
          node.left = newNode;
          return;
        }
        insertValue(node.left, newNode);
        return;
      }
      if (!node.right) {
        node.right = newNode;
        return;
      }
      insertValue(node.right, newNode);
      return;
    };

    if (!root) {
      root = newNode;
      return;
    } else {
      insertValue(root, newNode);
      return;
    }
  };
};

module.exports = BinarySearchTree;
