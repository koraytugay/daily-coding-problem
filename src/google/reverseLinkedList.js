// Given the head of a singly linked list, reverse it in-place
const ReverseLinkedList = {
    reverseLinkedList: (/** @type{ListNode} */ head) => {
        if (head === undefined) {
            return undefined;
        }

        if (head.next === undefined) {
            return head;
        }

        let temp = head;
        let tail = head.next.next;

        head = temp.next;
        head.next = temp;
        head.next.next = undefined;

        while (tail !== undefined) {
            let tempNext = tail.next;

            temp = head;
            head = tail;
            head.next = temp;

            tail = tempNext;
        }

        return head;
    },
    ListNode: function ListNode(/** @type{ListNode} */ next, val) {
        return {
            next: next,
            val: val
        }
    }
};

module.exports = ReverseLinkedList;
