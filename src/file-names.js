const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const objOfFiles = {};
  return [...names].map(el => {
    return (!objOfFiles[el]) ? createNum(el) : changeNum();

    function createNum(el) {
      objOfFiles[el] = el;
      return el;
    }

    function changeNum(i = 1) {
      postFix = `(${i})`;
      return (!objOfFiles[el+postFix]) ? createNum(el+postFix) : changeNum(i = i + 1);
    }
  })
}

module.exports = {
  renameFiles
};
