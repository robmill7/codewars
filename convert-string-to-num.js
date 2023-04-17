/*
Create the function that takes as a parameter a 
sequence of numbers represented as strings and 
outputs a sequence of numbers.

ie:["1", "2", "3"] to [1, 2, 3]

Note that you can receive floats as well.
*/

function toNumberArray(stringarray){
  var nums = stringarray.map(function(str) {
         // using map() to convert array of strings to numbers
         return parseFloat(str); 
  });
  
  return nums
}
