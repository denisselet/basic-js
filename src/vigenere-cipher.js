const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(noRevers = true) {
    this.noRevers = noRevers
  }
  encrypt(str, viz) {
    if (!str  || !viz ) throw new Error('Incorrect arguments!');
    str = str.toLowerCase()
    viz = viz.toLowerCase()
    let alp = "abcdefghijklmnopqrstuvwxyz"
    let repeatViz = ""
    let n = 0
    for (let i = 0; i < str.length; i++) {
       if (!(alp.includes(str[i]))) {
          n += 1
          repeatViz += str[i]
          continue
       }
       repeatViz = repeatViz + viz[(((i - n)%viz.length))]
    }
    let sss = ""
    for (let i = 0; i < str.length; i++) {
       if (!(alp.includes(str[i]))) {
          sss += str[i]
          continue
       }
       let strLettter = alp.indexOf(str[i])
       let vizLettter = alp.indexOf(repeatViz[i])
       let sum = strLettter + vizLettter
       let diff = (sum > 25) ? sum % 26 : sum
       sss += alp[diff].toUpperCase()
    }
    if (this.noRevers === false) {
      sss = sss.split("").reverse().join("")
    }

    return sss
  }
  decrypt(str, viz) {
    if (!str || !viz) {
      throw new Error('Incorrect arguments!');
    }
    str = str.toLowerCase()
    viz = viz.toLowerCase()
    let alp = "abcdefghijklmnopqrstuvwxyz"
    let repeatViz = ""
    let n = 0
    for (let i = 0; i < str.length; i++) {
       if (!(alp.includes(str[i]))) {
          n += 1
          repeatViz += str[i]
          continue
       }
       repeatViz = repeatViz + viz[(((i - n)%viz.length))]
    }
    let sss = ""
    for (let i = 0; i < str.length; i++) {
       if (!(alp.includes(str[i]))) {
          sss += str[i]
          continue
       }
       let strLettter = alp.indexOf(str[i])
       let vizLettter = alp.indexOf(repeatViz[i])
       let sum = strLettter - vizLettter 
       let diff = (sum < 0) ? 26 + sum : sum
       sss += alp[diff].toUpperCase()
    }
    if (this.noRevers === false) {
      sss = sss.split("").reverse().join("")
    }
    return sss
  }
}


// const directMachine = new VigenereCipheringMachine();
 
// const reverseMachine = new VigenereCipheringMachine(false);

// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'))// => 'AEIHQX SX DLLU!'
 
// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))// => 'ATTACK AT DAWN!'
 
// console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'))// => '!ULLD XS XQHIEA'
 
// console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'))// => '!NWAD TA KCATTA'

// 'KAYIWIAMMOUIW');

// console.log(directMachine.encrypt('Samelengthkey', 'Samelengthkey'))


module.exports = {
  VigenereCipheringMachine
};
