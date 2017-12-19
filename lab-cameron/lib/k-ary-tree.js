'use strict';

const Queue = require('./queue');
const Stack = require('./stack');

const KAryTree = function(value) {
  this.value = value;
  this._children = [];
};

KAryTree.prototype.appendChild = function(tree) {
  if (!(tree instanceof KAryTree)) {
    throw new TypeError('must insert k-ary tree');
  }

  this._children.push(tree);
};

KAryTree.prototype.levelOrderTraversal = function() {
  const queue = new Queue();
  queue.enqueue(this);

  while(queue.getLength() > 0) {
    const item = queue.dequeue();

    console.log(`visiting ${item.value}`);

    for (let child of item._children) {
      queue.enqueue(child);
    }
  }
};

KAryTree.prototype.depthFirstTraversal = function() {
  const stack = new Stack();
  stack.push(this);

  while(stack.getLength() > 0) {
    const item = stack.pop();

    console.log(`visiting ${item.value}`);

    for (let child of item._children) {
      stack.push(child);
    }
  }
};

const one = new KAryTree(1);
const two = new KAryTree(2);
const three = new KAryTree(3);
const four = new KAryTree(4);
const five = new KAryTree(5);
const six = new KAryTree(6);
const seven = new KAryTree(7);
const eight = new KAryTree(8);

one.appendChild(two);
one.appendChild(three);
one.appendChild(four);

three.appendChild(five);
three.appendChild(six);
three.appendChild(seven);

six.appendChild(eight);

one.depthFirstTraversal();
