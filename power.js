/*
The goal is to create a function of two inputs number and power, 
that "raises" the number up to power (ie multiplies number by itself power times).

Note: Math.pow and some other Math functions like eval() and ** are disabled.

*/

function numberToPower(number, power){
  
  let result = 1;
  for(let i = 0; i < power; i++){
    result *= number
  }
  
  return result;
}
