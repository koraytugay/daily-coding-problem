const expect = require('chai').expect;
const reverseLinkedList = require('../../src/google/reverseLinkedList');

let head;
let node_01;
let node_02;
let reversed;

node_02 = reverseLinkedList.ListNode(undefined, 2);
node_01 = reverseLinkedList.ListNode(node_02, 1);
head = reverseLinkedList.ListNode(node_01, 0);

reversed = reverseLinkedList.reverseLinkedList(head);
expect(reversed.val).to.equal(2);
expect(reversed.next.val).to.equal(1);
expect(reversed.next.next.val).to.equal(0);
expect(reversed.next.next.next).to.equal(undefined);

node_01 = reverseLinkedList.ListNode(undefined, 1);
head = reverseLinkedList.ListNode(node_01, 0);
head.next = node_01;

reversed = reverseLinkedList.reverseLinkedList(head);
expect(reversed.val).to.equal(1);
expect(reversed.next.val).to.equal(0);
expect(reversed.next.next).to.equal(undefined);

head = reverseLinkedList.ListNode(undefined, 0);
reversed = reverseLinkedList.reverseLinkedList(head);
expect(reversed.val).to.equal(0);
expect(reversed.next).to.equal(undefined);
