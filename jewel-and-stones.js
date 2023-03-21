/**
 * This question is asked by Amazon.
 * Given a string representing your stones and another string representing a list of jewels,
 * return the number of stones that you have that are also jewels.
 * 
 * Ex: Given the following jewels and stones...
 * 
 * jewels = "abc", stones = "ac", return 2
 * jewels = "Af", stones = "AaaddfFf", return 3
 * jewels = "AYOPD", stones = "ayopd", return 0
 * 
 */

function mine (jewels, stones) {
    let pairs = 0;    

    // O(n)
    for (let stone of stones) {
        if (jewels.includes(stone)) {
            pairs++;
        }
    }
    
    return pairs;
}

[
    ["abc", "ac"],         // return 2
    ["Af", "AaaddfFf"],    // return 3
    ["AYOPD", "ayopd"]     // return 0
].forEach((jewels) => console.log(jewels, mine(jewels[0], jewels[1])));
