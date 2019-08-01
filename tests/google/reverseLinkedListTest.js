const expect = require('chai').expect;
const reverseLinkedList = require('../../src/google/reverseLinkedList');

let head = reverseLinkedList.ListNode(0, reverseLinkedList.ListNode(1, reverseLinkedList.ListNode(2, undefined)));

reversed = reverseLinkedList.reverseLinkedList(head);
expect(reversed.val).to.equal(2);
expect(reversed.next.val).to.equal(1);
expect(reversed.next.next.val).to.equal(0);
expect(reversed.next.next.next).to.equal(undefined);

head = reverseLinkedList.ListNode(0, reverseLinkedList.ListNode(1, undefined));

reversed = reverseLinkedList.reverseLinkedList(head);
expect(reversed.val).to.equal(1);
expect(reversed.next.val).to.equal(0);
expect(reversed.next.next).to.equal(undefined);

head = reverseLinkedList.ListNode(0, undefined);
reversed = reverseLinkedList.reverseLinkedList(head);
expect(reversed.val).to.equal(0);
expect(reversed.next).to.equal(undefined);
