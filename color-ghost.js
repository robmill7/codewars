/*
Create a class Ghost

Ghost objects are instantiated without any arguments.

Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red"
*/

var Ghost = function() {
  const colors = ['white','yellow','purple','red'];
  
  // chooses random color from colors array
  const randomIndex = Math.floor(Math.random() * colors.length);
  
  // assigns random color from array to new ghost
  let randomColor = colors[randomIndex];
  this.color = randomColor;
};
