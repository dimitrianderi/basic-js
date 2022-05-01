const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let max = 0;
  num = n.toString().split('');

  for (let i = 0; i < num.length; i++) {
    let current = [...num];
    current.splice(i, 1);
    max = ((item = +(current.join(''))) > max) ? max = item : max = max;
  }
  return max;
}

module.exports = {
  deleteDigit
};
