/*
Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters,
and returns a string containing the same characters in alphabetical order.
*/

function sortGiftCode(code){
  // make string an array to sort it then join and return
   return code.split('').sort().join('');
}
