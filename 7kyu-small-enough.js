/*******************************************************************
You will be given an array and a limit value. You must check that
all values in the array are below or equal to the limit value. 
If they are, return true. Else, return false.

You can assume all values in the array are numbers.
******************************************************************/

function smallEnough(a, limit){
  // filtering numbers that are below or equal to limit
  let size = a.filter(num => num <= limit);

  //if filtered numbers are the same amount as original array return true
  return size.length == a.length;
}
