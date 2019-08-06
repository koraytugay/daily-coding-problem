const expect = require('chai').expect;
const deepestNode = require('../../src/google/deepestNode');

let a = deepestNode.TreeNode('a');
let b = deepestNode.TreeNode('b');
let c = deepestNode.TreeNode('c');
let d = deepestNode.TreeNode('d');

a.left = b;
b.left = d;

a.right = c;

expect(deepestNode.deepestNode(a).node.val).eq('d');

a = deepestNode.TreeNode('a');
expect(deepestNode.deepestNode(a).node.val).eq('a');
