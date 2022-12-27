const assert = require('assert');

function sanitizeText(text) {
  const re = /[^a-zA-Z0-9]+/gi;
  return text.match(re)
    ? text.replace(re, '').toLowerCase()
    : text.toLowerCase();
}

function validPalindrome(text) {
  const sanitizedText = sanitizeText(text);
  let left = 0;
  let right = sanitizedText.length - 1;

  while (left < right) {
    if (sanitizedText[left] !== sanitizedText[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

assert.equal(validPalindrome(''), true);
assert.equal(validPalindrome('a'), true);
assert.equal(validPalindrome('aa'), true);
assert.equal(validPalindrome('aba'), true);
assert.equal(validPalindrome('abba'), true);
assert.equal(validPalindrome('ab'), false);
assert.equal(validPalindrome('df#%df'), false);
assert.equal(validPalindrome('df#%fd'), true);
assert.equal(validPalindrome('A man, a plan, a canal: Panama'), true);
