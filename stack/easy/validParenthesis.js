const assert = require('assert');

class Stack {
  #stack = [];
  push(value) {
    this.#stack.push(value);
  }
  pop() {
    if (!this.empty()) return this.#stack.pop();
  }
  peek() {
    if (!this.empty()) return this.#stack[this.length() - 1];
  }
  empty() {
    return this.#stack.length == 0;
  }
  length() {
    return this.#stack.length;
  }
  clear() {
    this.#stack = [];
  }
}

function isValid(input, stack) {
  closeToOpen = {};
  closeToOpen[')'] = '(';
  closeToOpen[']'] = '[';
  closeToOpen['}'] = '{';

  for (let char of input) {
    if (!closeToOpen[char]) {
      stack.push(char);
    } else {
      const value = stack.peek();
      if (closeToOpen[char] == value) stack.pop;
      else return false;
    }
  }
  return true;
}

const stack = new Stack();
assert.equal(isValid('()', stack), true);
assert.equal(isValid('()[]{}', stack), true);
assert.equal(isValid('(]', stack), false);
assert.equal(isValid('([)]', stack), false);
