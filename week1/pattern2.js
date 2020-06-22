var inputArray = [
  [1, 2, 3, 4, 5],
  [16, 17, 18, 19, 6],
  [15, 24, 25, 20, 7],
  [14, 23, 22, 21, 8],
  [13, 12, 11, 10, 9]
]

var n = inputArray.length;
for (var i = 0; i < n; i++) {
  for (var j = i; j < n - i; j++)
  console.log(inputArray[i][j]);
  for (var j = i + 1; j < n - i; j++)
  console.log(inputArray[j][n - (i+1)]);
  for (var j = n - (i + 2); j >= i; j--)
  console.log(inputArray[n - (i + 1)][j]);
  for (var j = n - (i + 2); j > i; j--)
  console.log(inputArray[j][i]);
}
