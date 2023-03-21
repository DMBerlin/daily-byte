/**
 * This question is asked by Google. Given a string, return whether or not it uses capitalization correctly. A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.
 * 
 * Ex: Given the following strings...
 * 
 * "USA", return true
 * "Calvin", return true
 * "compUter", return false
 * "coding", return true
 * "ambeR", false
 */


function isCapitalized (word) {

    let stack = [];

    for (let n = 0; n < word.length; n++) {
        if (word[n] === word[n].toUpperCase()) {
            stack.push(word[n]);
            if (n > 0 && n < word.length && word[n-1].toUpperCase() !== word[n-1]) {
                return false;
            }
        }        
    }
    
    return word.length === stack.length || stack.length === 1 || stack.length === 0;
}

[
    "USA",
    "Calvin",
    "compUter",
    "coding",
    "ambeR",
    "coTTon"
].forEach((test) => console.log(test, isCapitalized(test)));