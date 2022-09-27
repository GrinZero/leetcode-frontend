function findNumberIn2DArray(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }
  let i = 0,
    j = matrix[0].length - 1;
  // 选择右上方的元素作为起点，因为此时i--变小，j++变大，类似二分
  while (i < matrix.length && j >= 0) {
    if (matrix[i][j] === target) return true;
    if (matrix[i][j] > target) j--;
    else i++;
  }
  return false;
}
