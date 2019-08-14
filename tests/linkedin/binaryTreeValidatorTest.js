const expect = require('chai').expect;
const binaryTreeValidator = require('../../src/linkedin/binaryTreeValidator');

let root = binaryTreeValidator.TreeNode(50);
root.l = binaryTreeValidator.TreeNode(25);
root.r = binaryTreeValidator.TreeNode(75);

expect(binaryTreeValidator.isValidBinaryTree(root)).eq(true);

root = binaryTreeValidator.TreeNode(50);
root.r = binaryTreeValidator.TreeNode(25);
root.l = binaryTreeValidator.TreeNode(75);

expect(binaryTreeValidator.isValidBinaryTree(root)).eq(false);

root = binaryTreeValidator.TreeNode(20, binaryTreeValidator.TreeNode(10, binaryTreeValidator.TreeNode(50)));
expect(binaryTreeValidator.isValidBinaryTree(root)).eq(false);
