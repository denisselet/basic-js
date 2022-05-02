const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let t1 = s1.split("")
  let t2 = s2.split("")
  let sum = 0;
  for (let i = 0; i < t1.length; i++) {
     if (t2.includes(t1[i])) {
        delete t2[t2.indexOf(t1[i])]
     }
  }
  t2 = t2.join("").split("")
  return s2.length - t2.length
}

module.exports = {
  getCommonCharacterCount
};
