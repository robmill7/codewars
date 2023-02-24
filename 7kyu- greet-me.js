/***************************************************************
Write a method that takes one argument as name and then greets that name,
capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
***************************************************************/

var greet = function(name) {
  name = name.toLowerCase(); // make all letters in name lower case
  return `Hello ${name.charAt(0).toUpperCase() + name.slice(1)}!` // make sure first letter of name is capitalized for greeting

};
