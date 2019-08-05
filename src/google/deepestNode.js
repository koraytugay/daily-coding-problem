// Given the root of a binary tree, return a deepest node.
// For example, in the following tree, return d.
//     a
//    / \
//   b   c
//  /
// d
module.exports = {
    deepestNode: function findDeepest(node) {
        let deepestFound = {node: null, level: -1};

        function traverse(node, currentLevel = 0) {
            if (!node)
                return;

            currentLevel = currentLevel + 1;

            if (deepestFound.level < currentLevel)
                deepestFound = {node: node, level: currentLevel};

            traverse(node.left, currentLevel);
            traverse(node.right, currentLevel);
        }

        traverse(node);
        return deepestFound.node;
    },
    TreeNode: (val, left = null, right = null) => {
        return {val, left, right}
    }
};
