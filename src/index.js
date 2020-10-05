
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) {
    return []
  };
  let newMatrix = []
    for(var i = 0; i < matrix.length; i++) {
      if(i!= 0 && i % 2) {
         newMatrix[i] = matrix[i].reverse()
      } else {
      newMatrix[i] = matrix[i];
      }
    }
    return newMatrix.reduce(
      (result, element) => result.concat(element),
      []
    );
}

