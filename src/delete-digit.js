const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let arr = [], arr2 = []
  for (let i = 0; i < String(n).length; i++) {
     arr.push(String(n).split(""))
     delete arr[i][i]
     arr2.push(+arr[i].join(""))
  }
  function getMaxOfArray(numArray) {
     return Math.max.apply(null, numArray);
   }

  return getMaxOfArray(arr2)
}

module.exports = {
  deleteDigit
};
