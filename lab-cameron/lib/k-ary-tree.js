'use strict';

const Queue = require('./queue');
const Stack = require('./stack');

const KAryTree = function(value) {
  if (typeof value !== 'number') {
    throw new TypeError('value must be a number');
  }

  this.value = value;
  this._children = [];
};

KAryTree.prototype.appendChild = function(tree) {
  if (!(tree instanceof KAryTree)) {
    throw new TypeError('must insert k-ary tree');
  }

  this._children.push(tree);
};

KAryTree.prototype.levelOrderTraversal = function(callback = logValue) {
  const queue = new Queue();
  queue.enqueue(this);

  while(queue.getLength() > 0) {
    const item = queue.dequeue();

    callback(item);

    for (let child of item._children) {
      queue.enqueue(child);
    }
  }
};

KAryTree.prototype.depthFirstTraversal = function(callback = logValue) {
  const stack = new Stack();
  stack.push(this);

  while(stack.getLength() > 0) {
    const item = stack.pop();

    callback(item);

    for (let child of item._children) {
      stack.push(child);
    }
  }
};

KAryTree.prototype.find = function(value) {
  let found = null;
  const findValue = node => {
    if (node.value === value) {
      found = node;
      return;
    }
  };

  this.levelOrderTraversal(findValue);
  return found;
};

KAryTree.prototype.toString = function() {
  let str = '';
  const treeToString = node => {
    str +=  `${node.value} \n`;
  };

  this.levelOrderTraversal(treeToString);
  return str;
};

KAryTree.prototype.toArray = function() {
  const arr = [];
  const treeToArray = node => {
    arr.push(node);
  };

  this.depthFirstTraversal(treeToArray);
  return arr;
};

const logValue = item => {
  console.log(`visiting ${item.value}`);
};
