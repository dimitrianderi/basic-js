const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newArr = [];

    if (!Array.isArray(arr)) {
      throw new Error("'arr' parameter must be an instance of the Array!");
    }

    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case '--double-next':
          if (arr[i + 1] && arr[i + 1] !== '--double-next' && arr[i + 1] !== '--double-prev' &&  arr[i + 1] !== '--discard-next' && arr[i + 1] !== '--discard-prev') {
            newArr.splice(i, 0, arr[i + 1]);
            newArr.splice(i, 0, arr[i + 1]);
            i++;
          }
          break;
        case '--double-prev':
          if (arr[i - 1] && arr[i - 2] !== '--discard-next' && arr[i - 1] !== '--double-next' && arr[i - 1] !== '--double-prev' && arr[i - 1] !== '--discard-next' && arr[i - 1] !== '--discard-prev') {
            newArr.push(arr[i - 1]);
          }
          break;
        case '--discard-next':
          if (arr[i + 1] && arr[i + 1] !== '--double-next' && arr[i + 1] !== '--double-prev' && arr[i + 1] !== '--discard-next' && arr[i + 1] !== '--discard-prev') {
            i++;
          }
          break;
        case '--discard-prev':
          if (arr[i - 1] && arr[i - 2] !== '--discard-next' && arr[i - 1] !== '--double-next' && arr[i - 1] !== '--double-prev' && arr[i - 1] !== '--discard-next' && arr[i - 1] !== '--discard-prev') {
            newArr.pop();
          }
          break;
        default:
          newArr.push(arr[i]);
      }
    }

    return newArr.flat(Infinity);

}

module.exports = {
  transform
};
