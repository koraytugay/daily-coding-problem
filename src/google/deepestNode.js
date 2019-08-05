// Given the root of a binary tree, return a deepest node.
// For example, in the following tree, return d.
//     a
//    / \
//   b   c
//  /
// d
module.exports = {
    deepestNode: (node) => {
        return function findRecursively(node, deepestFound = {node: null, level: -1}) {
            if (!node) return deepestFound;

            const deepestLeft = findRecursively(node.left, {node: node, level: deepestFound.level + 1});
            const deepestRight = findRecursively(node.right, {node: node, level: deepestFound.level + 1});

            return deepestLeft.level > deepestRight.level ? deepestLeft : deepestRight;
        }(node).node;
    },
    TreeNode: (val, left = null, right = null) => {
        return {val, left, right}
    }
};
