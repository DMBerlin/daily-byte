/**
 * This question is asked by Amazon.
 * 
 * Given two arrays of numbers, where the first array is a subset of the second array,
 * return an array containing all the next greater elements for each element in the first array,
 * in the second array. If there is no greater element for any element, output -1 for that number.
 * 
 * Ex: Given the following arrays…
 * 
 * nums1 = [4,1,2], nums2 = [1,3,4,2], return [-1, 3, -1]
 * because no element in nums2 is greater than 4, 3 is the first number in nums2 greater than 1,
 * and no element in nums2 is greater than 2.
 * 
 * nums1 = [2,4], nums2 = [1,2,3,4], return [3, -1]
 * because 3 is the first greater element that occurs in nums2 after 2 and no element is greater than 4.
 */

const expect = require('../utils/expect/a-to-b.expect');

function greaterElements (actual, array) {
  let output = new Array(actual.length).fill(-1);

  let actualMap = {};
  actual.forEach((val, ind) => actualMap[val] = ind);

  let stack = []; //Monotonic Stack

  for (let n in array) {
    let cur = array[n];
    while (stack && cur > stack[stack.length -1]) {
      let val = stack.pop();
      let idx = actualMap[val];
      output[idx] = cur;
    }
    if (cur in actualMap)
      stack.push(cur);
  }

  return output;
}

[
  [[4, 1, 2], [1, 3, 4, 2], [-1, 3, -1]],
  [[2, 4], [1, 2, 3, 4], [3, -1]],
].forEach(([actual, array, expected]) => expect(greaterElements(actual, array)).toMatchArray(expected));