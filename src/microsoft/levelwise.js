// Print the nodes in a binary tree level-wise.
// For example, the following should print 1, 2, 3, 4, 5, 6.
//   1
//  / \
// 2   3
//    / \
//   4   5
//  /
// 6
module.exports = {
    levelWise: function levelWise(node) {
        let levelWise = [];
        let queue = [node];
        while (queue.length !== 0) {
            let n = queue.shift();
            levelWise.push(n.val);
            n.left && queue.push(n.left);
            n.right && queue.push(n.right);
        }
        return levelWise.join(',');
    },
    Node: (val, left = null, right = null) => {
        return {val, left, right}
    }
};
