/*
Your task is to return a number from a string.
*/

var FilterString = function(value) {
  return parseInt(value.replace(/[^\d]/g, ""))
}
