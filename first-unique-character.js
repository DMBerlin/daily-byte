/**
 * This question is asked by Microsoft.
 * Given a string, return the index of its first unique character.
 * If a unique character does not exist, return -1.
 * 
 * Ex: Given the following strings...
 * 
 * "abcabd", return 2
 * "thedailybyte", return 1
 * "developer", return 0
 * 
 */

function firstUnique(chars) {
    let map = {}
    
    for (let char of chars) {
        map[char] ? map[char]++ : map[char] = 1;
    }
    
    for (let i = 0; i < chars.length; i++) {
        if (map[chars[i]] === 1) return i;
    }
        
    return -1
}

[
    "abcabd",       // return 2
    "thedailybyte", // return 1
    "developer"     // return 0
].forEach((characters) => console.log(characters, firstUnique(characters)));