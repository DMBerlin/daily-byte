/**
 * This question is asked by Apple. Given two binary strings (strings containing only 1s and 0s) return their sum (also as a binary string).
 * Note: neither binary string will contain leading 0s unless the string itself is 0
 * 
 * Ex: Given the following binary strings...
 * "100" + "1", return "101"
 * "11" + "1", return "100"
 * "1" + "0", return  "1"
 * 
 */


function sumStrings (a, b) {
    // we used BigInt() to convert binary to Integer. Syntax is BigInt(0b11) here `0b` is prefix and `11` is binary number
    let sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
    // sum is converted back to string using toString(2), here 2 is radix argument, so toString(2) converts to binary
    return sum.toString(2);
};

[
    ["100", "1"],
    ["11", "1"],
    ["1", "0"]
].forEach(([num1, num2]) => console.log(num1, num2, sumStrings(num1, num2)));