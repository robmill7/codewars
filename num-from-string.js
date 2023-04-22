/*
Write a function which removes from string all non-digit characters and 
parse the remaining to number. E.g: "hell5o wor6ld" -> 56
*/

function getNumberFromString(s) {
  // using regx to remove any character that is not a digit
 const digits = s.replace(/\D/g, '');
  return Number(digits);
  
}
