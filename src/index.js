
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return []
  };
  let newMatrix = []
    for(var i = 0; i < matrix.length; i++) {
      if(i!= 0 && i % 2) {
         newMatrix.concat(matrix[i].reverse())
      } else {
        newMatrix.concat(matrix[i])
      }
    }
    return newMatrix;
}

