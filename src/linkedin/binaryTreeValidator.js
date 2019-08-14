// Determine whether a tree is a valid binary search tree.
//
// A binary search tree is a tree with two children, left and right,
// and satisfies the constraint that the key in the left child must be
// less than or equal to the root and the key in the right child must be greater than or equal to the root.
module.exports = {
    TreeNode: (val, l = null, r = null) => {return {val, l: l, r: r}},
    isValidBinaryTree: function isValidBinaryTree(node) {
        if (node.l && (node.val < node.l.val || !isValidBinaryTree(node.l))) return false;
        if (node.r && (node.val > node.r.val || !isValidBinaryTree(node.r))) return false;
        return true;
    }
};
