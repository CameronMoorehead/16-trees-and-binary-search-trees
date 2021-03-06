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

  describe('BinarySearchTree.findMin(<node>)', () => {
    test('findMin() should return the left-most node of the sub-tree passed in as node', () => {
      const BSTtoTest = new BinarySearchTree();
      BSTtoTest.insert(10);
      BSTtoTest.insert(15);
      BSTtoTest.insert(5);

      const root = BSTtoTest.getRoot();

      expect(BSTtoTest.findMin(root).value).toEqual(5);
    });

    test('findMin() should return null if root is null', () => {
      const BSTtoTest = new BinarySearchTree();

      const root = BSTtoTest.getRoot();

      expect(BSTtoTest.findMin(root)).toEqual(null);
    });
  });

  describe('BinarySearchTree.remove(<value>)', () => {
    test('remove(<value>) should return value of removed node and binary-tree should be balanced accordingly', () => {
      const BSTtoTest = new BinarySearchTree();
      BSTtoTest.insert(10);
      BSTtoTest.insert(8);
      BSTtoTest.insert(12);
      BSTtoTest.insert(14);
      BSTtoTest.insert(11);
      BSTtoTest.insert(9);
      BSTtoTest.insert(3);

      // removing root node
      expect(BSTtoTest.getNodeCount()).toEqual(7);
      expect(BSTtoTest.remove(10)).toBeTruthy();
      expect(BSTtoTest.getRoot().value).toEqual(11);
      expect(BSTtoTest.getNodeCount()).toEqual(6);

      // removing leaf node
      expect(BSTtoTest.getNodeCount()).toEqual(6);
      expect(BSTtoTest.getRoot().left.left).not.toEqual(null);
      expect(BSTtoTest.remove(3)).toBeTruthy();
      expect(BSTtoTest.getRoot().value).toEqual(11);
      expect(BSTtoTest.getRoot().left.left).toEqual(null);
      expect(BSTtoTest.getNodeCount()).toEqual(5);

      // removing node with only one right child
      expect(BSTtoTest.getNodeCount()).toEqual(5);
      expect(BSTtoTest.getRoot().left.right).not.toEqual(null);
      expect(BSTtoTest.remove(8)).toBeTruthy();
      expect(BSTtoTest.getRoot().value).toEqual(11);
      expect(BSTtoTest.getRoot().left.value).toEqual(9);
      expect(BSTtoTest.getRoot().left.right).toEqual(null);
      expect(BSTtoTest.getNodeCount()).toEqual(4);

      // removing node with only one left child
      expect(BSTtoTest.getNodeCount()).toEqual(4);
      expect(BSTtoTest.getRoot().left).not.toEqual(null);
      expect(BSTtoTest.remove(9)).toBeTruthy();
      expect(BSTtoTest.getRoot().value).toEqual(11);
      expect(BSTtoTest.getRoot().left).toEqual(null);
      expect(BSTtoTest.getNodeCount()).toEqual(3);
    });

    test('remove(<value>) should return null if root is null', () => {
      const BSTtoTest = new BinarySearchTree();

      expect(BSTtoTest.remove(5)).toEqual(null);
    });

    test('remove(<value>) should return unchanged tree if node with value is non-existent', () => {
      const BSTtoTest = new BinarySearchTree();
      BSTtoTest.insert(10);
      BSTtoTest.insert(15);
      BSTtoTest.insert(5);

      expect(BSTtoTest.remove(100)).toEqual(null);
    });

    test('remove(<value>) should return the removed node if its a leaf node', () => {
      const BSTtoTest = new BinarySearchTree();
      BSTtoTest.insert(10);
      BSTtoTest.insert(15);
      BSTtoTest.insert(5);

      const removedNode = BSTtoTest.remove(15);

      expect(removedNode.value).toEqual(15);
    });

    test('remove(<value>) should return the removed node if its has only a left or right child', () => {
      const BSTtoTest = new BinarySearchTree();
      BSTtoTest.insert(10);
      BSTtoTest.insert(15);

      const removedNode = BSTtoTest.remove(10);

      expect(removedNode.value).toEqual(10);
    });

    test('remove(<value>) should return the removed node if its has both a left and right child', () => {
      const BSTtoTest = new BinarySearchTree();
      BSTtoTest.insert(10);
      BSTtoTest.insert(15);
      BSTtoTest.insert(5);

      const removedNode = BSTtoTest.remove(5);

      expect(removedNode.value).toEqual(5);
    });
  });
});
