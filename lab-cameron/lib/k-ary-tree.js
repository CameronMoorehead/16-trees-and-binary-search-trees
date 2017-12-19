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

    const aux = callback(item);
    if (aux) {
      return aux;
    }

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

    const callbackReturn = callback(item);
    if (callbackReturn) {
      return callbackReturn;
    }

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
    }
    return found;
  };
  console.log(found);

  return this.levelOrderTraversal(findValue);
  // return returnValue;
};

KAryTree.prototype.toString = function() {
  let str = '';
  const treeToString = node => {
    str += `\n ${node.value}`;
  };

  this.levelOrderTraversal(treeToString);
  return str;
};

const logValue = item => {
  console.log(`visiting ${item.value}`);
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


console.log(one.find(3));
