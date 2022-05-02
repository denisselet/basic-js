const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 function getSeason(date) {
   if(date === undefined) {
    return 'Unable to determine the time of year!';
   }
  
  if (Object.keys(date).includes('toString')) {
    throw new Error('Invalid date!');
  }

  if (typeof date.getMonth !== 'function') {
    throw new Error('Invalid date!')
  }
  let tt = date.getMonth()
  let ret;
  if(tt === 0 || tt === 1 || tt === 11) {ret = "winter"}
  if(tt === 2 || tt === 3 || tt === 4) {ret = "spring"}
  if(tt === 5 || tt === 6 || tt === 7) {ret = "summer"}
  if(tt === 8 || tt === 9 || tt === 10) {ret = "autumn"}
  return ret
}

// const springDate = new Date()
// console.log(getSeason())

module.exports = {
  getSeason
};
