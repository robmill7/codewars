/*
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors.
A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors.
A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(floors) {
  const tower = [];
  let floorWidth = floors * 2 - 1;
  for (let i = 0; i < floors; i++) {
    let spaces = " ".repeat((floorWidth - (i * 2 + 1)) / 2);
    let blocks = "*".repeat(i * 2 + 1);
    tower.push(spaces + blocks + spaces);
  }
  return tower;
}
