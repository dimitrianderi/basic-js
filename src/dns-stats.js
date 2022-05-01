const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let objOfDomains = {};

  for (let el in domains) {
    let domain = domains[el].split('.').reverse();
    while (domain.length > 0) {
      (objOfDomains['.'+domain.join('.')] >= 1) ? objOfDomains['.'+domain.join('.')]++ : objOfDomains['.'+domain.join('.')] = 1;
      domain.splice(-1);
    }
  }
  return objOfDomains;
}

module.exports = {
  getDNSStats
};
