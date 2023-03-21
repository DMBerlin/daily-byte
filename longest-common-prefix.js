/**
 * This question is asked by Microsoft. Given an array of strings,
 * return the longest common prefix that is shared amongst all strings.
 * Note: you may assume all strings only contain lowercase alphabetical characters.
 * 
 * Ex: Given the following arrays...
 * 
 * ["colorado", "color", "cold"], return "col"
 * ["a", "b", "c"], return ""
 * ["spot", "spotty", "spotted"], return "spot"
 * 
 */

function longest (prefixes) {
    const sorted = prefixes.sort();
    let len = 0;
    let big = sorted[sorted.length - 1];
    let small = sorted[0];
    for (let s = 0; s < small.length; s++) {
        let v = small[s];
        let a = small.indexOf(v);
        let b = big.indexOf(v);
        if (a - b === 0) {
            len++;
        } else {
            break;
        }
    }
    return small.slice(0, len);
};

[
    ["colorado", "color", "cold"],  // "col"
    ["a", "b", "c"],                // ""
    ["spot", "spotty", "spotted"],  // "spot"
].forEach((prefixes) => console.log(longest(prefixes)));