const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, total = 0) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return (JSON.stringify(arr.flat(total)) === JSON.stringify(arr.flat(Infinity))) ? total + 1 : this.calculateDepth(arr, total += 1);
  }
}

module.exports = {
  DepthCalculator
};
