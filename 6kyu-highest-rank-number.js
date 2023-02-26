/****************************************************************************************
Complete the method which returns the number which is most frequent in the given input array.
If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  --> 
****************************************************************************************/

function highestRank(arr){
  const counts = {};

  /* looping through array and making key value pairs with numbers 
  for keys and count of numbers for values for counts object
   */
for (let i = 0; i < arr.length; i++) {
  const num = arr[i];
  if (counts[num]) {
    counts[num]++;
  } else {
    counts[num] = 1;
  }
}
  
let maxKey = null;
let maxValue = 0;
  
/* looping through counts to find highest value
and checking for multiple keys with highest value and
returning highest key*/
for (const key in counts) {
   if (counts[key] > maxValue || (counts[key] == maxValue && key > maxKey)) {
    maxKey = key;
    maxValue = counts[key];
  }
}
  
  return Number(maxKey)

}
