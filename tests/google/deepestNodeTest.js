const expect = require('chai').expect;
const deepestNode = require('../../src/google/deepestNode');

let a = deepestNode.TreeNode('a', deepestNode.TreeNode('b', deepestNode.TreeNode('d')), deepestNode.TreeNode('c'));
expect(deepestNode.deepestNode(a).node.val).eq('d');

expect(deepestNode.deepestNode(deepestNode.TreeNode('one')).node.val).eq('one');
