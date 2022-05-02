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
 function encodeLine(s) {
  if(s === "") return ""
  let mas = [];
  mas[0] = [1, s[0]]
  for(let i = 1; i < s.length; i++) {
     if (s[i] === s[i-1]) {
        mas[mas.length-1] = [ (mas[mas.length-1][0] + 1), s[i] ]
     } else {
        mas.push([1, s[i]])
     }
  }
  // return mas
  let aa = ""
  for (let i = 0; i < mas.length; i++) {
     if (mas[i][0] === 1) {
        aa += mas[i][1]
     } else {
        aa += mas[i][0] + mas[i][1]
     }
  }
  return aa
}

module.exports = {
  encodeLine
};
