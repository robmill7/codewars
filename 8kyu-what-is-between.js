/**********************************************************************
Complete the function that takes two integers (a, b, where a < b)
and return an array of all integers between the input parameters,
including them.

For example:

**************************************************************************/


function between(a, b) {
  let ans =[];
  
  while (a <= b ){
    ans.push(a);
    a++
  }
  return ans
}
