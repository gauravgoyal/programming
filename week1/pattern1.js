// Pattern
/**
   1
  111
 11111
1111111
*/

var n = 5;
for (var i = 0; i < n; i++) {
  for (var j = 0; j < 2*n - 1; j++) {
    if (j >= n - (i+1) && j < n + i ) {
      process.stdout.write('*');
    }
    else {
      process.stdout.write(' ');
    }
  }
  process.stdout.write('\n');
}


