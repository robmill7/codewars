/*
Given a string made of digits [0-9], 
return a string where each digit is
repeated a number of times equals to its value.
*/

function explode(s) {
  let result = '';
  
  for (let i = 0; i < s.length; i++) {
    const digit = parseInt(s[i], 10); // Convert digit to a number
    
    result += s[i].repeat(digit); // Repeat the digit and append to the result
  }
  
  return result;
}
