const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  ch: [],
getLength() {
  this.ch = this.ch.length
},
addLink(value) {
  let tt = typeof value === undefined ? "" : value
  this.ch.push("( " + tt + " )")
  return this
},
removeLink(position) {
  if (this.ch[position] && position != 0) {
     this.ch.splice(position - 1, 1)
     return this
 } else {
     this.ch = []
     throw new Error('You can\'t remove incorrect link!')
 }
},
reverseChain() {
  this.ch = this.ch.reverse();
  return this
},
finishChain() {
  let ret = this.ch.join( '~~' );
  this.ch = []
  return ret
}
};

module.exports = {
  chainMaker
};
