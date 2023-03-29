/**
 * This question is asked by Google. Given two integer arrays, return their intersection.
 * Note: the intersection is the set of elements that are common to both arrays.
 * 
 * Ex: Given the following arrays...
 * 
 * nums1 = [2, 4, 4, 2], nums2 = [2, 4], return [2, 4]
 * nums1 = [1, 2, 3, 3], nums2 = [3, 3], return [3]
 * nums1 = [2, 4, 6, 8], nums2 = [1, 3, 5, 7], return []
 * 
 */

function intersects (nums1, nums2) {
  let set = new Set();

  // O(n)
  for (let n of nums2) {
    // O(m)
    if (nums1.some((num) => num === n)) {
      set.add(n);
    }
  }

  return [...set];
}

[
  { nums1: [2, 4, 4, 2], nums2: [2, 4] },       // returns [2, 4]
  { nums1: [1, 2, 3, 3], nums2: [3, 3] },       // returns [3]
  { nums1: [2, 4, 6, 8], nums2: [1, 3, 5, 7] }, // returns []
].forEach((nums) => console.log(nums, intersects(nums.nums1, nums.nums2)));

// Time: O(n * m) => O(n) <constant time>