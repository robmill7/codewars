/*
Write a function that converts any sentence into a V A P O R W A V E sentence. 
a V A P O R W A V E sentence converts all the letters into uppercase, and adds 
2 spaces between each letter (or special character) to create this V A P O R W A V E 
effect.
*/

function vaporcode(string) {
  /* removing spaces in string, uppercase all letters 
  and make into array*/
  
  let vapor = string.replace(/\s+/g, '')
  .toUpperCase().split('')

  // join string back together with double spaces
  return vapor.join('  ')
  
}
