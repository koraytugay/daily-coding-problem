// Given the head of a singly linked list, reverse it in-place
const ReverseLinkedList = {
    reverseLinkedList: (/** @type{ListNode} */ head) => {
        let newHead = undefined;

        while (head) {
            let temp = head.next;
            head.next = newHead;
            newHead = head;
            head = temp;
        }

        return newHead;
    }, ListNode: (val, /** @type{ListNode} */ next) => {
        return {
            val: val,
            next: next
        }
    }
};

module.exports = ReverseLinkedList;
