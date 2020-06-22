var inputArray = [
  [1, 2, 3, 4, 5],
  [16, 17, 18, 19, 6],
  [15, 24, 25, 20, 7],
  [14, 23, 22, 21, 8],
  [13, 12, 11, 10, 9]
]

var length = inputArray.length;
for (var i = 0; i < length; i++) {
  dir = (i % 2 == 0 ) ? 'down' : 'up';
  switch (dir) {
    case 'down':
      for (var j = 0; j < length; j++)
      console.log(inputArray[j][i]);
    break;
    case 'up':
      for (var j = length - 1; j >= 0; j--)
      console.log(inputArray[j][i]);
    break;
  }
}
