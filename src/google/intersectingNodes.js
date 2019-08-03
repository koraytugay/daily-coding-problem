// Given two singly linked lists that intersect at some point, find the intersecting node.
// For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.
module.exports = {
    intersectingNode: (/** @type{ListNode} */ listOne, /** @type{ListNode} */ listTwo) => {
        const nodes = new Set();

        let pointer = listOne;
        while (pointer) {
            nodes.add(pointer.val);
            pointer = pointer.next;
        }

        pointer = listTwo;
        while (pointer) {
            if (nodes.has(pointer.val))
                return pointer.val;
            pointer = pointer.next;
        }

        return -1;
    }
};
