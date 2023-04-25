/*
check whether a given integer is a perfect power. If it is a perfect power,
return a pair m and k with mk = n as a proof.
Otherwise return null
*/

var isPP = function(n){
  // Check for edge cases
  if (n <= 1) {
    return null;
  }

  // Loop through potential values of k and m
  for (var k = 2; k <= Math.ceil(Math.log2(n)); k++) {
    var m = Math.round(Math.pow(n, 1 / k));

    // Check if mk = n
    if (Math.pow(m, k) == n) {
      return [m, k];
    }
  }

  // If no perfect power is found, return null
  return null;
}
