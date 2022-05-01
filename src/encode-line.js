const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  
  let letter = str[0];
  let result = '';

  [...str].reduce((total, el, ind, arr) => {

    let currentTotal = (el === letter) ? plusEl() : newEl();
    return (ind === arr.length - 1) ? newEl(1) : currentTotal;

    function plusEl() {
      return (ind === 0) ? total : total + 1;
    }
      
    function newEl(item = 0) {
      total = (item === 1) ? currentTotal : total + item;
      result += (total === 1) ? letter : total + letter;
      letter = el;
      return 1;
    }

  }, 1);

  return result;
}

module.exports = {
  encodeLine
};
