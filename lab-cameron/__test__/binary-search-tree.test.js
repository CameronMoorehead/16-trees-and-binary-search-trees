'use strict';

const BinarySearchTree = require('../lib/binary-search-tree');

describe('binary-search-tree.js', () => {
  describe('BinarySearchTree.insert(<value>)', () => {
    test('insert should insert node in ordered fashion into tree', () => {
      const BSTtoTest = new BinarySearchTree();
      BSTtoTest.insert(10);
      BSTtoTest.insert(8);
      BSTtoTest.insert(12);
      BSTtoTest.insert(14);
      BSTtoTest.insert(11);
      BSTtoTest.insert(9);
      BSTtoTest.insert(3);

      const root = BSTtoTest.getRoot();
      expect(root.value).toEqual(10);

      expect(root.left.value).toEqual(8);
      expect(root.left.right.value).toEqual(9);
      expect(root.left.left.value).toEqual(3);

      expect(root.right.value).toEqual(12);
      expect(root.right.right.value).toEqual(14);
      expect(root.right.left.value).toEqual(11);
    });

    test('should throw an error if value is not a number', () => {
      const BSTtoTest = new BinarySearchTree();
      expect(() => {

        BSTtoTest.insert('not a number');
      }).toThrow();
    });
  });

  describe('BinarySearchTree.getRoot()', () => {
    test('getRoot() should return the first node added to the binary tree', () => {
      const BSTtoTest = new BinarySearchTree();
      BSTtoTest.insert(10);
      BSTtoTest.insert(15);
      BSTtoTest.insert(5);

      expect(BSTtoTest.getRoot().value).toEqual(10);
    });

    test('getRoot() should return null if tree is empty', () => {
      const BSTtoTest = new BinarySearchTree();

      expect(BSTtoTest.getRoot()).toEqual(null);
    });
  });
});
