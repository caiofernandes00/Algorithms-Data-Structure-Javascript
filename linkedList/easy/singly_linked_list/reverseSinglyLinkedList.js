const assert = require('assert');

function reverseSinglyLinkedList(node) {
  let prev = null;
  let current = node;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;

    prev = current;
    current = next;
  }

  return prev;
}

let SinglyLinkedList = require('./singlyLinkedList.js').SinglyLinkedList;
const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.addNode(1);
singlyLinkedList.addNode(3);
singlyLinkedList.addNode(5);

const reversedSinglyLinkedList = reverseSinglyLinkedList(singlyLinkedList.head);
assert.strictEqual(reversedSinglyLinkedList.value, 5);
assert.strictEqual(reversedSinglyLinkedList.next.value, 3);
assert.strictEqual(reversedSinglyLinkedList.next.next.value, 1);
