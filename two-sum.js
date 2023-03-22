/**
 * This question is asked by Google.
 * Given an array of integers, return whether or not two numbers sum to a given target, k.
 * Note: you may not sum a number with itself.
 * 
 * Ex: Given the following...
 * [1, 3, 8, 2], k = 10, return true (8 + 2)
 * [3, 9, 13, 7], k = 8, return false
 * [4, 2, 6, 5, 2], k = 4, return true (2 + 2)
 * 
 */

function twoSum (nums, k) {
    let map = new Map();

    // O(n)
    for (let n = 0; n < nums.length; n++) {
        let target = k - nums[n];
        // O(1)
        if (map.has(target)) {
            return true;
        } else {
            map.set(nums[n], n);
        }
    }
    return false;
}

[
    [[1, 3, 8, 2], 10],     // true (8 + 2)
    [[3, 9, 13, 7], 8],     // false
    [[4, 2, 6, 5, 2], 4],   // true (2 + 2)
].forEach((test) => console.log(test, twoSum(test[0], k = test[1])))