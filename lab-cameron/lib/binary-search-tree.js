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

    const newNode = new Node(value);

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

  this.getRoot = () => {
    return root;
  };

  this.remove = value => {
    root = removeNode(root, value);

    const removeNode = (node, value) => {
      if (root === null) {
        return null;
      }
      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }

        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }

        const temp = this.findMin(node.right);
        node.value = temp.value;
        node.right = removeNode(node.right, temp.value);
        return node;
      }
    };
  };

  this.findMin = node => {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  };
};

module.exports = BinarySearchTree;
