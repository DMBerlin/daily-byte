/**
 * This question is asked by Facebook.
 *
 * Given a string s containing only lowercase letters,
 * continuously remove adjacent characters that are the same and return the result.
 *
 * Ex: Given the following strings...
 *
 * s = "abccba", return ""
 * s = "foobar", return "fbar"
 * s = "abccbefggfe", return "a"
 */

const expect = require('../utils/expect/a-to-b.expect');

function removeAdjacentDup(letters) {
  const stack = [];
  // O(n)
  for (const letter of letters) {
    // O(1)
    stack[stack.length - 1] === letter ? stack.pop() : stack.push(letter);
  }
  // O(n)
  return stack.join('');
}

[
  ["abccba", ""],
  ["foobar", "fbar"],
  ["abccbefggfe", "a"],
].forEach(([actual, expected]) => expect(removeAdjacentDup(actual)).toBe(expected));

// Time: O(n)
// Space: s = letters - duplicates => O(s)
