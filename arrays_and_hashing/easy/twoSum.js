const assert = require('assert');

function twoSum(arrayNum, target) {
  const obj = {};

  for (let i = 0; i < arrayNum.length; i++) {
    const num = arrayNum[i];
    const diff = target - num;

    if (obj[diff] !== undefined) {
      return [obj[diff], i];
    }

    obj[num] = i;
  }

  return [];
}

assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
assert.deepEqual(twoSum([3, 2, 3], 6), [0, 2]);
assert.deepEqual(twoSum([3, 2, 4], 4), []);
