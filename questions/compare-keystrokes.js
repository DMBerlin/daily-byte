/**
 * This question is asked by Amazon.
 * Given two strings s and t, which represents a sequence of keystrokes,
 * where # denotes a backspace, return whether or not the sequences produce the same result.
 * 
 * Ex: Given the following strings...
 * 
 * s = "ABC#", t = "CD##AB", return true
 * s = "como#pur#ter", t = "computer", return true
 * s = "cof#dim#ng", t = "code", return false
 * 
 */

function format (characters) {
  // O(n)
  characters = characters.split('');
  const output = [];
  let n = 0;
  // O(n)
  for (let char of characters) {
    if (char === '#') {
      // O(1)
      output.pop();
    } else {
      // O(1)
      output.push(char);
    }
  }
  // O(n)
  return output.join('');
}

function compareKeystrokes (s, t) {
  return format(s) === format(t);  
}

[
  [['ABC#', 'CD##AB'], true],
  [['como#pur#ter', 'computer'], true],
  [['cof#dim#ng', 'code'], false],
  [['y#fo##f', 'y#f#o##f'], true],
].forEach(([actual, expected]) => console.log(compareKeystrokes(actual[0], actual[1]) === expected ? 'pass' : 'fail'));

// Time: O(n)
// Space: O(n)