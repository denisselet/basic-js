const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(g) {
    let max = 0
    for(let item of g) {
      if (Array.isArray(item)) {
        let vrem = this.calculateDepth(item)
        if (vrem > max) {max = vrem}
      } 
    }
    max += 1
    return max
       
  }
}
const instance = new DepthCalculator();
// console.log(instance.calculateDepth([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]])) //8
// console.log("ret " + instance.calculateDepth([[], [[]]]))
module.exports = {
  DepthCalculator
};
