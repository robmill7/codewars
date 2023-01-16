/*
Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

*/


function adjacentElementsProduct(array) {
  let product =[]
  
    for (var i=0; i<array.length; ) {
        product.push(array[i] * array[i+1]) ;
      i++
    } 
  
  // not sure why but it does not work unless this consolelog is ran...
  console.log(product.sort((a, b) => b - a))
    return product.sort((a, b) => b - a)[0];
}
