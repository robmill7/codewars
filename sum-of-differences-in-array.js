/****************************************************************************************************************************
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
******************************************************************************************************************************/

function sumOfDifferences(arr) {
  const arrSorted = arr.sort((a, b) => b - a);
  let sumDiff = 0;

  // looping through sorted array, subtracting from left to right and returning final number
for (let i = 0; i < arrSorted.length - 1; i++) {
  const diff = arrSorted[i] - arrSorted[i + 1];
  sumDiff += diff;
  }
  return sumDiff

}
