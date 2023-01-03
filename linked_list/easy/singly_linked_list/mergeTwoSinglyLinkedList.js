const assert = require('assert');

function mergeTwoSinglyLinkedLists(node1, node2) {
  if (!node1) return node2;
  if (!node2) return node1;

  let mergeList = null;

  if (node1.value <= node2.value) {
    mergeList = node1;
    mergeList.next = mergeTwoSinglyLinkedLists(node1.next, node2);
  } else {
    mergeList = node2;
    mergeList.next = mergeTwoSinglyLinkedLists(node1, node2.next);
  }

  return mergeList;
}

let SinglyLinkedList = require('./singlyLinkedList.js').SinglyLinkedList;
const singlyLinkedList1 = new SinglyLinkedList();
singlyLinkedList1.addNode(1);
singlyLinkedList1.addNode(2);
singlyLinkedList1.addNode(3);
singlyLinkedList1.addNode(10);

const singlyLinkedList2 = new SinglyLinkedList();
singlyLinkedList2.addNode(2);
singlyLinkedList2.addNode(5);

const mergedSinglyLinkedList = mergeTwoSinglyLinkedLists(
  singlyLinkedList1.head,
  singlyLinkedList2.head
);
assert.strictEqual(mergedSinglyLinkedList.value, 1);
assert.strictEqual(mergedSinglyLinkedList.next.value, 2);
assert.strictEqual(mergedSinglyLinkedList.next.next.value, 2);
assert.strictEqual(mergedSinglyLinkedList.next.next.next.value, 3);
assert.strictEqual(mergedSinglyLinkedList.next.next.next.next.value, 5);
assert.strictEqual(mergedSinglyLinkedList.next.next.next.next.next.value, 10);
