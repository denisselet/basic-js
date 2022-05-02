const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let obj = {}
  for (let i = 0; i < domains.length; i++) {
     let tt = domains[i].split(".").reverse()
     for (let j = 0; j < tt.length; j++) {
        if ("."+tt.slice(0, j+1).join(".") in obj) {
           obj[String("."+tt.slice(0, j+1).join("."))] = obj[String("."+tt.slice(0, j+1).join("."))] + 1
        } else {
           obj[String("."+tt.slice(0, j+1).join("."))] = 1
        }
     }
  }
  return obj
}

module.exports = {
  getDNSStats
};
