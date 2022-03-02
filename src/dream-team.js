const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 *
 */


function createDreamTeam( members ) {
  if (typeof members !== 'object' || members === null) {
    return false
  } else {
    if(members.length < 2 || !(Array.isArray(members))) {
      // console.log(Array.isArray(members))
      return false;
    }
  }

  let mem = [];
  let str = [];
  members.forEach(function(item) {
    if (typeof item === 'string') {
      mem.push(item);
    }
  })

    mem.forEach(function(item) {
      for (let i = 0; i < item.length; i++) {
        if (item[i] !== ' ') {
          str.push(item[i].toUpperCase()) ;
          break;
        }
      }

    })
    console.log(str)




  return str.sort().join("");
}

module.exports = {
  createDreamTeam
};

//  console.log(createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']))
 console.log(createDreamTeam({ 'foo': 'bar' }))


// BDETV