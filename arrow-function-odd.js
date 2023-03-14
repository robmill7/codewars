/*
Return the odds from a list:

[1, 2, 3, 4, 5]  -->  [1, 3, 5]
[2, 4, 6]        -->  []
*/

function odds(values){
  // arrow it
  return values.filter(n => n % 2!==0 );
}
