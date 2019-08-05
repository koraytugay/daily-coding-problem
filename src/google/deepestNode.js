// Given the root of a binary tree, return a deepest node.
// For example, in the following tree, return d.
//     a
//    / \
//   b   c
//  /
// d
module.exports = {
    deepestNode: function findDeepest(node) {
        function findRecursively(node, deepestFound = {node: null, level: -1}) {
            if (!node)
                return deepestFound;

            let deepest = {node: node, level: deepestFound.level + 1};

            const deepestLeft = findRecursively(node.left, deepest);
            const deepestRight = findRecursively(node.right, deepest);

            if (deepestLeft.level > deepestRight.level)
                return deepestLeft;
            else
                return deepestRight;
        }

        return findRecursively(node).node;
    },
    TreeNode: (val, left = null, right = null) => {
        return {val, left, right}
    }
};
