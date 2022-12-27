const assert = require('assert');

function isAnagram(text1, text2) {
  return text1.split('').sort().join('') === text2.split('').sort().join('');
}

function isAnagram2(text1, text2) {
  if (text1.length !== text2.length) return false;

  const obj = {};

  for (let i = 0; i < text1.length; i++) {
    obj[text1.charAt(i)] = obj[text1.charAt(i)] + 1 || 1;
    obj[text1.charAt(i)] = obj[text1.charAt(i)] - 1 || -1;
  }

  for (let i = 0; i < text2.length; i++) {
    if (!obj[text2.charAt(i)]) return false;
  }

  return true;
}

assert.equal(isAnagram('anagram', 'nagaram'), true);
assert.equal(isAnagram('rat', 'car'), false);
assert.equal(isAnagram('a', 'ab'), false);

assert.equal(isAnagram2('anagram', 'nagaram'), true);
assert.equal(isAnagram2('rat', 'car'), false);
assert.equal(isAnagram2('a', 'ab'), false);
