# BST's and K-Ary Trees

Implementation of BST and K-Ary:
      _______                   
     /_  __/_______  ___  _____
      / / / ___/ _ \/ _ \/ ___/
     / / / /  /  __/  __(__  )
    /_/ /_/   \___/\___/____/  

# Tech Used

- JavaScript
- Jest

# Features / How to Use

- A K-Ary Tree class which
- 1. allows you to append children to any node in the tree via `appendChild(<tree>)`
- 2. log out tree values using `tree.levelOrderTraversal()` `tree.depthFirstTraversal()`
- 3. perform `tree.find(<value>)` to get a specific node
- 4. perform `tree.toString()` to receive back a string of the nodes in the tree in level-order
- 5. perform `tree.toArray()` to receive back an array of the nodes in the tree in depth-first order (via post-order traversal)

- A Binary Search Tree class which
- 1. allows you to insert nodes via `tree.insert(<value>)`
- 2. receive a number representing the number of nodes with `tree.getNodeCount()`
- 3. receive the root of the tree using `tree.getRoot()`
- 4. find the minimum of the tree using `tree.findMin()`
- 5. remove nodes from the tree and receive the removed node via `tree.remove(<value>)`

# Performance

### K-Ary Tree

- levelOrderTraversal()

Space: O(w) where w is the # of nodes in current level being traversed

Time: O(n) where n is the # of nodes in the tree

- depthFirstTraversal()

Space: O(h) where h is the height of the tree

Time: O(n) where n is the # of nodes in the tree

- find(), toString() & toArray()

Space: O(n) where n is the number of nodes in the tree

Time: O(n) where n is the number of nodes in the tree

- appendChild() & logValue(<item>)

Space: O(1) constant
Time: O(1) constant

### Binary Search Tree

- insert()

Space: O(1) constant

Time (worst): O(h) where h is equal to the height of the tree

Time (avg/best): O(log n) where n is equal to the # of nodes in the tree

- remove(<value>)

Space: O(1) constant

Time (worst): O(h) where h is equal to the height of the tree

Time (avg/best): O(log n) where n is equal to the # of nodes in the tree

- getMin()

Space: O(1) constant

Time: O(h) where h is equal to the height of the tree

- getNodeCount() & getRoot()

Space: O(1) constant

Time: O(1) constant

# Installation

1. Clone the repo
2. Require in `binary-search-tree.js` or `k-ary-tree.js`
3. Instantiate new Binary Search Trees and K-Ary Tree objects!

# Tests

All testing done using jest

# Credits

Cameron Moorehead - https://github.com/CameronMoorehead
