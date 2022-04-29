const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
 function sortByHeight(arr) {
  let mas = []
  for(let i = 0; i < arr.length; i++) {mas.push(arr[i])}
  mas.sort(function(a, b) {
    return a - b;
  });
  let lengths = mas.map(function(item) {if (item != -1) {return item}});
  let rr = []
  for (let t = 0; t < lengths.length; t++) {if (lengths[t] != undefined) {rr.push(lengths[t])}}
  let ret = []
  for (let i = 0; i < arr.length; i++) {
     if(arr[i] === -1) {
        ret.push(-1)
     } else {

        ret.push(rr.shift())
     }
  }
  return ret
}

module.exports = {
  sortByHeight
};
