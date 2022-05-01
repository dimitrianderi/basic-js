const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, opt) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let repeatTimes = (opt.repeatTimes) ? opt.repeatTimes : 1;
  let separator = (opt.separator) ? opt.separator : '+';

  let additionSeparator = (opt.additionSeparator) ? opt.additionSeparator.toString() : '|';
  let additionRepeatTimes = (opt.additionRepeatTimes) ? opt.additionRepeatTimes : 1;
  let addition = (opt.addition || opt.addition === false || opt.addition === null) ? opt.addition : '';
  addition = (typeof (addition) === 'string') ? addition : String(addition);
  addition = (currentSTR = (addition + additionSeparator).repeat(additionRepeatTimes)).substr(0, currentSTR.length - additionSeparator.length);

  miniSeparator = separator;
  separator = addition + separator;
  str = (typeof (str) === 'string') ? str : String(str);
  str = str + separator;

  return (resultSTR = str.repeat(repeatTimes)).substr(0, resultSTR.length - miniSeparator.length);
}

module.exports = {
  repeater
};
