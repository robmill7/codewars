/*
Given an array of integers , 
Find the minimum sum which is obtained from summing each Two integers product .
*/

function minSum(arr) {
  // Sort the array in ascending order
  arr.sort((a, b) => a - b);
  
  // Initialize the sum variable
  let sum = 0;
  
  // Loop through the array and sum the products of adjacent elements
  // .length / 2 because your looping from the beginning and the end
  for (let i = 0; i < arr.length / 2; i++) {
    sum += arr[i] * arr[arr.length - 1 - i];
  }
  
  // Return the sum
  return sum;
}

