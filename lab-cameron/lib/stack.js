'use strict';

const Stack = function() {
  let items = [];

  this.push = value => {
    items.push(value);
  };

  this.pop = () => {
    return items.pop();
  };

  this.getLength = () => {
    return items.length;
  };
};

module.exports = Stack;
