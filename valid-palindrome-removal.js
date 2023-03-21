/**
 * This question is asked by Facebook. Given a string and the ability to delete at most one character,
 * return whether or not it can form a palindrome.
 * 
 * Note: a palindrome is a sequence of characters that reads the same forwards and backwards.
 * Ex: Given the following strings...
 * 
 * "abcba", return true
 * "foobof", return true (remove the first 'o', the second 'o', or 'b')
 * "abccab", return false
 * 
 */

function validPalindrome(s,left = 0, right = s.length - 1, removedChars = 0) {
    if (removedChars > 1) return false;

    while(left < right){
        if (s[left] !== s[right])
            return validPalindrome(s, left+1, right, removedChars+1) || validPalindrome(s, left, right-1, removedChars+1);

        left++;
        right--;
    }

    return true;
}

[
   "abcba",     // true
   "foobof",    // true
   "abccab"     // false
].forEach((test) => console.log(test, validPalindrome(test)));

/**
 * Time: O(n)
 * Space: O(n)
 */