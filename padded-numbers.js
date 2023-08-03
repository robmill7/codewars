/*
Complete the solution so that it returns a formatted string. 
The return value should equal "Value is VALUE" where value is a 5 digit padded number.

Example:

solution(5) // should return "Value is 00005"
*/

function solution(value){
    let numberStr = String(value);
    let leadingZeros = 5 - numberStr.length;

 if (leadingZeros > 0) {
    numberStr = '0'.repeat(leadingZeros) + numberStr;
  }

  return `Value is ${numberStr}`;
}
