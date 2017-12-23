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

  // describe('KAryTree.levelOrderTraversal(<callback>)', () => {
  //
  // });

  // describe('KAryTree.depthFirstTraversal(<callback>)', () => {
  //
  // });

  describe('KAryTree.find(<value>)', () => {
    test('KAryTree.find(<value>) should return the found Node in the K-ary tree', () => {
      const KAryTreeToTest = new KAryTree(1);
      KAryTreeToTest.appendChild(new KAryTree(2));
      KAryTreeToTest.appendChild(new KAryTree(3));
      KAryTreeToTest.appendChild(new KAryTree(4));

      expect(KAryTreeToTest.find(1).value).toEqual(1);
      expect(KAryTreeToTest.find(2).value).toEqual(2);
      expect(KAryTreeToTest.find(3).value).toEqual(3);
      expect(KAryTreeToTest.find(4).value).toEqual(4);
    });

    test('KAryTree.fin(<value>) should respond with null if no such value exists', () => {
      const KAryTreeToTest = new KAryTree(1);
      KAryTreeToTest.appendChild(new KAryTree(2));
      KAryTreeToTest.appendChild(new KAryTree(3));
      KAryTreeToTest.appendChild(new KAryTree(4));

      expect(KAryTreeToTest.find(100000)).toBeNull();
    });
  });

  describe('KAryTree.toString()', () => {
    test('KAryTree.toString() should return a string of nodes found in level-order', () => {
      const KAryTreeToTest = new KAryTree(1);
      KAryTreeToTest.appendChild(new KAryTree(2));
      KAryTreeToTest.appendChild(new KAryTree(3));
      KAryTreeToTest.appendChild(new KAryTree(4));

      const expected = '1 \n2 \n3 \n4 \n';

      expect(KAryTreeToTest.toString()).toEqual(expected);
    });
  });

  describe('KAryTree.toArray()', () => {
    test('KAryTree.toArray() should return an array of nodes in depth-first order', () => {
      const KAryTreeToTest = new KAryTree(1);

      const two = new KAryTree(2);
      const three = new KAryTree(3);
      const four = new KAryTree(4);

      const five = new KAryTree(5);
      const six = new KAryTree(6);

      KAryTreeToTest.appendChild(two);
      KAryTreeToTest.appendChild(three);
      KAryTreeToTest.appendChild(four);

      three.appendChild(five);
      three.appendChild(six);

      const expected = [KAryTreeToTest, four, three, six, five, two];
      expect(KAryTreeToTest.toArray()).toEqual(expected);
    });
  });
});
