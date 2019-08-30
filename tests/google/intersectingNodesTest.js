const expect = require('chai').expect;
const reverseLinkedList = require('../../src/google/reverseLinkedList');
const intersectingNodes = require('../../src/google/intersectingNodes');

let listOne;
let listTwo;

listOne = reverseLinkedList.ListNode(0, reverseLinkedList.ListNode(1, reverseLinkedList.ListNode(2, undefined)));
listTwo = reverseLinkedList.ListNode(4, reverseLinkedList.ListNode(3, reverseLinkedList.ListNode(2, undefined)));

expect(intersectingNodes.intersectingNode(listOne, listTwo)).to.equal(2);
expect(intersectingNodes.intersectingNode(listTwo, listOne)).to.equal(2);

listOne = reverseLinkedList.ListNode(0, reverseLinkedList.ListNode(1, reverseLinkedList.ListNode(2, undefined)));
listTwo = reverseLinkedList.ListNode(3, reverseLinkedList.ListNode(4, reverseLinkedList.ListNode(5, undefined)));

expect(intersectingNodes.intersectingNode(listOne, listTwo)).to.equal(-1);
expect(intersectingNodes.intersectingNode(listTwo, listOne)).to.equal(-1);
