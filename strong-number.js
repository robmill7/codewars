/*
Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

Task
Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".
*/

function strong(n) {
  let sum = 0;
  let digits = n.toString().split('');
  
  for (let i = 0; i < digits.length; i++) {
    let digit = parseInt(digits[i]);
    let factorial = 1;
    for (let j = 1; j <= digit; j++) {
      factorial *= j;
    }
    sum += factorial;
  }
  
  if (sum == n){
    return "STRONG!!!!";
  }
  else {
    return "Not Strong !!";
  }
}
