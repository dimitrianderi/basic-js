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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let minI, maxI, minJ, maxJ;
  let arrForTrue = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {

      if (matrix[i][j] === true) {
        arrForTrue.push([i, j]);
      }

      if (i === matrix.length - 1 && j === matrix[matrix.length - 1].length - 1) {
        enumeration();
      }

      function enumeration() {
        for (let i = 0; i < matrix.length; i++) {
          for (let j = 0; j < matrix[i].length; j++) {
            if (JSON.stringify(arrForTrue).includes([i, j])) {
              matrix[i][j] = matrix[i][j];
              vertical(i);
              horisontal(j);
              paintMines();
            }
          }
        }
      }

      function vertical(i) {
        minI = (i - 1 <= 0) ? 0 : 1;
        maxI = (i + 1 >= 2) ? 2 : 1;
      }

      function horisontal(j) {
        minJ = (j - 1 <= 0) ? 0 : 1;
        maxJ = (j + 1 >= 2) ? 2 : 1;
      }

      function paintMines() {
        for (let i = minI; i <= maxI; i++) {
          for (let j = minJ; j <= maxJ; j++) {
            matrix[i][j] += 1;
          }
        }
      }

      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          if (matrix[i][j] === false) matrix[i][j] = 0;
          if (JSON.stringify(arrForTrue).includes([i, j])) matrix[i][j] = 1;
        }
      }
    }
  }
  return matrix;
}

module.exports = {
  minesweeper
};
