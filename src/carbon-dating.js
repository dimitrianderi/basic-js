const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(SAMPLE_ACTIVITY) {
  let k = Math.log(2) / HALF_LIFE_PERIOD;
  return (typeof SAMPLE_ACTIVITY !== 'string' ||
    typeof (+SAMPLE_ACTIVITY) !== 'number' ||
    isNaN(+SAMPLE_ACTIVITY) !== false ||
    +SAMPLE_ACTIVITY <= 0 || 
    +SAMPLE_ACTIVITY > 15) ? false : Math.ceil((Math.log(MODERN_ACTIVITY / SAMPLE_ACTIVITY)) / k);
}

module.exports = {
  dateSample
};
