const assert = require('assert');

function binarySearch(nums, target) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer <= rightPointer) {
    const middle = Math.floor((leftPointer + rightPointer) / 2);

    if (nums[middle] > target) rightPointer = middle - 1;
    else if (nums[middle] < target) leftPointer = middle + 1;
    else return middle;
  }

  return -1;
}

assert.equal(binarySearch([-1, 0, 3, 5, 9, 12], 9), 4);
assert.equal(binarySearch([-1, 0, 3, 5, 9, 12], 2), -1);
assert.equal(binarySearch([-1, 0, 3, 5, 9, 12], 12), 5);
assert.equal(binarySearch([-1, 0, 3, 5, 9, 12], 0), 1);
