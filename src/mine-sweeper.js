const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  matrix[0][0] = matrix[0][1] + matrix[1][0] + matrix[1][1]
  matrix[0][matrix.length-1] = matrix[0][matrix.length-2] + matrix[1][matrix.length-1] + matrix[1][matrix.length-2]
  matrix[matrix.length-1][0] = matrix[matrix.length-1][1] + matrix[matrix.length-2][0] + matrix[matrix.length-2][1]
  matrix[matrix.length-1][matrix.length-1] = matrix[matrix.length-1][matrix.length-2] + matrix[matrix.length-2][matrix.length-1] + matrix[matrix.length-2][matrix.length-2]
  
  
  // matrix[0][2] = matrix



  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[i].length; j++) {








    }
  }

  console.log(matrix)
}


 matrix = [
    [true, false, false],
    [false, true, false],
    [false, false, false]
   ]

  //  matrix = [  
  //  [false, false, false],
  //  [false, false, false],
  //  ]
console.log(minesweeper(matrix))

module.exports = {
  minesweeper
};


