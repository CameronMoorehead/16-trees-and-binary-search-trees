'use strict';

const Queue = function() {
  let items = [];

  this.enqueue = value => {
    items.push(value);
  };

  this.dequeue = () => {
    return items.shift();
  };

  this.getLength = () => {
    return items.length;
  };
};

module.exports = Queue;
