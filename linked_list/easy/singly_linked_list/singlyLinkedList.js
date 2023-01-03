const assert = require('assert').strict;

class NodeLst {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString() {
    return `Value: ${this.value}`;
  }
}

class SinglyLinkedList {
  head = null;

  addNode(value) {
    const newNode = new NodeLst(value);
    if (!this.head) this.head = newNode;
    else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  removeNode(value) {
    if (!this.head) return;

    if (this.head.value == value) this.head = this.head.next;
    else {
      let currentNode = this.head;
      let nextNode = currentNode.next;

      while (nextNode) {
        if (nextNode.value == value) {
          currentNode.next = nextNode.next;
          return;
        }

        currentNode = nextNode;
        nextNode = nextNode.next;
      }
    }
  }

  traverse() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.toString());
      currentNode = currentNode?.next;
    }
  }
}

const singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.addNode(1);
singlyLinkedList.addNode(2);
singlyLinkedList.addNode(3);
singlyLinkedList.addNode(4);
singlyLinkedList.addNode(5);
singlyLinkedList.addNode(6);
singlyLinkedList.removeNode(1);
singlyLinkedList.removeNode(3);
singlyLinkedList.removeNode(6);

assert.strictEqual(singlyLinkedList.head.value, 2);
assert.strictEqual(singlyLinkedList.head.next.value, 4);
assert.strictEqual(singlyLinkedList.head.next.next.value, 5);

module.exports = { SinglyLinkedList };
