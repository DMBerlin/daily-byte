/**
 * This question is asked by Amazon. Given two strings representing sentences,
 * return the words that are not common to both strings (i.e. the words that only appear in one of the sentences).
 * 
 * You may assume that each sentence is a sequence of words (without punctuation) correctly separated using space characters.
 * 
 * Ex: given the following strings...
 * 
 * sentence1 = "the quick", sentence2 = "brown fox", return ["the", "quick", "brown", "fox"]
 * sentence1 = "the tortoise beat the haire", sentence2 = "the tortoise lost to the haire", return ["beat", "to", "lost"]
 * sentence1 = "copper coffee pot", sentence2 = "hot coffee pot", return ["copper", "hot"]
 * 
 */

function uncommon(first, second) {
  const words = [...first, ...second];
  const obj = {};
  
  for (let word of words) {
    if (obj[word]) {
      obj[word] += 1;
    } else {
      obj[word] = 1;
    }    
  }
  
  const output = [];

  for (let key in obj) {
    if (obj[key] === 1) {
      output.push(key);
    }
  }

  return output;
}

[
  { first: ["the", "quick"], second: ["brow", "fox"] },
  { first: ["the", "tortoise", "beat", "the", "haire"], second: ["the", "tortoise", "lost", "to", "the", "haire"] }, 
  { first: ["copper", "coffe", "pot"], second: ["hot", "coffe", "pot"] },
].forEach((test) => console.log(test, uncommon(test.first, test.second)));