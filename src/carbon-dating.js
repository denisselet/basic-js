const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} s string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect s
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(s) {
  if(typeof s !== 'string') {return false}
  if (!(+s > 0 && +s <= 15 && !isNaN(+s))) {return false}
  return Math.ceil(Math.log(MODERN_ACTIVITY/s)/(0.693/HALF_LIFE_PERIOD))
}



module.exports = {
  dateSample
};
