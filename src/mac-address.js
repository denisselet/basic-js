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
  let mac = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  let t = n.split('-')
  let bool = false
  for (let i = 0; i < t.length; i++) {
     if (mac.includes(t[i][0]) && mac.includes(t[i][1])) {
        bool = true
     } else {
        return false
     }
  }
  return bool
}
module.exports = {
  isMAC48Address
};
