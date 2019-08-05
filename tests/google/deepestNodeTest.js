const expect = require('chai').expect;
const deepestNode = require('../../src/google/deepestNode');

let a = deepestNode.TreeNode('a');
let b = deepestNode.TreeNode('b');
let c = deepestNode.TreeNode('c');
let d = deepestNode.TreeNode('d');

a.left = b;
a.right = c;

b.left = d;

expect(deepestNode.deepestNode(a).val).eq('d');

a = deepestNode.TreeNode('a');
expect(deepestNode.deepestNode(a).val).eq('a');
