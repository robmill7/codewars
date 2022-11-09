//takes a number 0-12 and returns the factorial 
//
function factorial(n){
  let result = 1;
  
  if(n < 0 || n > 12){
    throw new RangeError(
      "The argument must be between 0 and 12."
    ); 
  }
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
