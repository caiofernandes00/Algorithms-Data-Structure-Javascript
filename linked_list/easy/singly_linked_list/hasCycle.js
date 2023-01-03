const assert = require('assert');

function hasCycle(node) {
  let slowPointer = node;
  let fastPointer = node.next;

  while (fastPointer.next && fastPointer.next.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (fastPointer == slowPointer) return true;
  }

  return false;
}

let SinglyLinkedList = require('./singlyLinkedList.js').SinglyLinkedList;
const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.addNode(1);
singlyLinkedList.addNode(3);
singlyLinkedList.addNode(5);
singlyLinkedList.addNode(7);
singlyLinkedList.addNode(9);

const node = singlyLinkedList.head.next.next;
node.next = singlyLinkedList.head.next;

assert.strictEqual(hasCycle(singlyLinkedList.head), true);
