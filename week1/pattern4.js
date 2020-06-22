var inputArray = [
  [1, 2, 3, 4, 5],
  [16, 17, 18, 19, 6],
  [15, 24, 25, 20, 7],
  [14, 23, 22, 21, 8],
  [13, 12, 11, 10, 9]
]

var n = inputArray.length;
var iterator = (2 * n);
var i = 0;
while (i < iterator) {
  var j = (i > n) ? i - n : 0;
  var k = (i > n) ? 0 : i;
  while (k < n && j < n) {
    console.log(inputArray[j][k]);
    j++;
    k++;
  }
  i++;
}

