const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  if (options.separator === undefined) {options.separator = "+"}
  if (options.additionSeparator === undefined) {options.additionSeparator = "|"}
  if (options.repeatTimes === undefined) {options.repeatTimes = 1}
  if (options.additionRepeatTimes === undefined) {options.additionRepeatTimes = 1}
  if (str === null) {str = 'null'}
  if (options.addition === null) {options.addition = 'null'}
  let qq = []
  let str1 = ""
  for(let i = 0; i < options.additionRepeatTimes; i++) {
     qq.push(options.addition)
  }
  str1 = qq.join(`${options.additionSeparator}`)
  let str2 = str + str1
  let arr = []
  for(let i = 0; i < options.repeatTimes; i++) {
     arr.push(str2)
  }

  let res = arr.join(`${options.separator}`)


  return res
}

module.exports = {
  repeater
};
