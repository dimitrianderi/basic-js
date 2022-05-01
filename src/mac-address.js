const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  n = n.split('-').join('').split('');
  let res = n.reduce((total, el) => {
    return ((el >= 0 && el <= 9) || (el >= 'A' && el <= 'F')) ? total + 1 : total;
  }, 0);

  return (res === 12) ? true : false;
}
module.exports = {
  isMAC48Address
};
