function matrixRegionSum(matrix, targetMatrix) {
  let startX = targetMatrix[0][0];
  let startY = targetMatrix[0][1];
  let sum = 0;

  for (let r = startX; startX < targetMatrix[1][0]; r += 1) {
    for (let c = startY; startY < targetMatrix[2][1]; c += 1) {
      sum += matrix[r][c];
    }
  }

  return sum;
}
