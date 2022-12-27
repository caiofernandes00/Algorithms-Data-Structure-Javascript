const assert = require('assert');

function containsDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

function containsDuplicate2(arr) {
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) return true;
    else obj[arr[i]] = true;
  }

  return false;
}

assert.equal(containsDuplicate([1, 2, 3, 1]), true);
assert.equal(containsDuplicate([1, 2, 3, 4]), false);
assert.equal(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);

assert.equal(containsDuplicate2([1, 2, 3, 1]), true);
assert.equal(containsDuplicate2([1, 2, 3, 4]), false);
assert.equal(containsDuplicate2([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
