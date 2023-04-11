/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(array){
  /*
  first converts each number to a string using String(), 
  and then returns the difference between the length of b's string
  and the length of a's string. This is used by sort() to determine
  the order of the numbers.
  then return the first element in the array because the array is
  sorted from most to least.
  */
  return array.sort((a, b) => String(b).length - String(a).length)[0];
  
}
