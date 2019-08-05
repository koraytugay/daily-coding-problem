// Given the root of a binary tree, return a deepest node.
// For example, in the following tree, return d.
//     a
//    / \
//   b   c
//  /
// d
module.exports = {
    deepestNode: function deepestNode(node, level = 0) {
        node.depth = level;

        if (!node.left && !node.right)
            return node;

        let deepestLeft, deepestRight = node;

        if (node.left)
            deepestLeft = deepestNode(node.left, level + 1);

        if (node.right)
            deepestRight = deepestNode(node.right, level + 1);

        if (deepestLeft.depth > deepestRight.depth)
            return deepestLeft;
        else
            return deepestRight;
    },
    TreeNode: (val) => {
        return {
            val,
            left: null,
            right: null
        }
    }
};
