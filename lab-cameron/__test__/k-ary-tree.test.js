'use strict';

const KAryTree = require('../lib/k-ary-tree');

describe('k-ary-tree.js', () => {
  describe('KAryTree.appendChild(<tree>)', () => {
    test('appendChild(<tree>) should push a new tree node into the trees children array', () => {
      const KAryTreeToTest = new KAryTree(1);
      KAryTreeToTest.appendChild(new KAryTree(2));
      KAryTreeToTest.appendChild(new KAryTree(3));
      KAryTreeToTest.appendChild(new KAryTree(4));

      expect(KAryTreeToTest._children.length).toEqual(3);
    });

    test('appendChild(<tree>) should throw an error if tree argument is not a tree', () => {
      const KAryTreeToTest = new KAryTree(1);
      expect(() => {
        KAryTreeToTest.appendChild('not a K-Ary tree');
      }).toThrow();
    });
  });

  describe('KAryTree.levelOrderTraversal(<callback>)', () => {

  });
});
