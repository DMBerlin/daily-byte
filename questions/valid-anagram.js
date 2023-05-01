/**
 * This question is asked by Facebook.
 *
 * Given two strings s and t return whether or not s is an anagram of t.
 * Note: An anagram is a word formed by reordering the letters of another word.
 *
 * Ex: Given the following strings...
 *
 * s = "cat", t = "tac", return true
 * s = "listen", t = "silent", return true
 * s = "program", t = "function", return false
 *
 */

const expect = require('../utils/expect/a-to-b.expect')

function validAnagram(s, t) {
    if (t.length !== s.length) return false;
    const counts = {};
    // O(n)
    for (let c of s) {
        counts[c] = (counts[c] || 0) + 1;
    }
    // O(n)
    for (let c of t) {
        if (!counts[c]) return false;
        counts[c]--;
    }
    return true;
}

[
    ["cat", "tac"],         // true
    ["listen", "silent"],   // true
    ["program", "function"] // false
].forEach((anagrams) => console.log(anagrams, validAnagram(anagrams[0], anagrams[1])));
