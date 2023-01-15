/*********************************************************************************************************************************
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one,
sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2
are empty, then just return an empty array.

Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the
returned result.

********************************************************************************************************************************/


function mergeArrays(arr1, arr2) {
  // merging arrays with no duplicates
  let uniqueChars1 = arr1.concat(arr2);
  let uniqueChars2 = [...new Set(uniqueChars1)];
  
  // checking both arrays to make sure they are not empty
  if(arr1 == null && arr2 == null){
    return [];
  }
  else{
    // returning merged array sorted ascending order
    return  uniqueChars2.sort((a, b) => a - b);
  }
  
  
  
}
