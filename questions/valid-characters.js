/**
 * This question is asked by Google.
 * 
 * Given a string only containing the following characters (, ), {, }, [, and ]
 * return whether or not the opening and closing characters are in a valid order.
 * 
 * Ex: Given the following strings...
 * 
 * "(){}[]", return true
 * "(({[]}))", return true
 * "{(})", return false
 * 
 */

function validCharacters (brackets) {
  const closingBracketFor = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  
  const openingBrackets = [];
  
  for (const bracket of brackets) {
    if (bracket in closingBracketFor) {
      openingBrackets.push(bracket);
    } else {
      const openingBracket = openingBrackets.pop();
      if (closingBracketFor[openingBracket] !== bracket) {
        return false;
      }
    }
  }
  
  return openingBrackets.length === 0;
}

[
  [['(', ')', '{', '}', '[', ']'], true],
  [['(', '(', '{', '[', ']', '}', ')', ')'], true],
  [['{', '(', '}', ')'], false],
].forEach(([actual, expected]) => console.log(validCharacters(actual) === expected ? 'pass' : 'fail'));