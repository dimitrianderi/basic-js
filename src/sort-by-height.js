const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrIndex = [];
  
  for (let el in arr) {
    if (arr[el] === -1) arrIndex.push(el);
  }

  arr.sort((a, b) => a - b).splice(0, arrIndex.length);

  arrIndex.forEach(el => arr.splice(el, 0, -1));

  return arr;
}

module.exports = {
  sortByHeight
};
