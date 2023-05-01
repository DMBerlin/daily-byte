
module.exports = function expect(actual) {
  return {
    toBe: (expected) => console.log(actual === expected ? 'pass' : 'fail'),
    toMatchArray: (expected) => {
      for (let n = 0; n < actual.length; n++) {
        if (actual[n] !== expected[n]) {
          return console.log('fail', { expected, received: actual });
        }
      }
      return console.log('pass');
    },
  }
}
