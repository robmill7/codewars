/*************************************
Write a function named sumDigits which takes a number as 
input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.



***********************************/




function sumDigits(number) {
  var digits = number.toString().split('');  //breaking number into digits
  var sum = [];
  
  console.log(digits)
  for ( let i = 0; i < digits.length; i++ ){  //loop through digits and store in sum array
    if(digits[i] == '-'){
      null
    }
    else{
      sum.push(Math.abs(digits[i]))         //get rid of '-' and push absolute value
    }
    
    
  }
  
  return sum.reduce((a,b,) => a+b,0)      //return sum
}
