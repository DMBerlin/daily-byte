
module.exports = function expect(actual) {  
  return {
    toBe: (expected) => console.log(actual === expected),
  }  
}