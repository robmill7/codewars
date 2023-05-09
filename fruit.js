/*
replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] 
the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array
of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

Notes
If the array is null/nil/None or empty you should return empty array ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned array should be in lowercase.
*/

function removeRotten(bagOfFruits){
  // checking for empty array
  if(!bagOfFruits) { return []; }
  
  // taking rotten out and returning array with all lowercase fruit 
  return bagOfFruits.map(function(fruit) {
    return fruit.replace("rotten", "").toLowerCase();
  });
}
