/***********************************************************************************************
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
************************************************************************************************/

function isSortedAndHow(array) {
  // used slice to sort without modifying the original array.
  let ascending = array.slice().sort((a, b) => a - b);
  let descending = array.slice().sort((a, b) => b - a);
  
  // this compaires the original array with the sorted array
  const equals = (a, b) =>
  a.length === b.length &&
  a.every((v, i) => v === b[i]);

// using equals function to see if array is descending or ascending
  if(equals(array, ascending)){
    return 'yes, ascending'
  }
  else if(equals(array, descending)){
    return 'yes, descending'
  }
  else{
    return 'no'
  }
}
