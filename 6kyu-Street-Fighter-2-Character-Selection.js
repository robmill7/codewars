/*************************************************************************************************
Input

the list of game characters in a 2x6 grid;
the initial position of the selection cursor (top-left is (0,0));
a list of moves of the selection cursor (which are up, down, left, right);
Output

the list of characters who have been hovered by the selection cursor after all the moves 
(ordered and with repetition, all the ones after a move, whether successful or not, see tests);
Rules

Selection cursor is circular horizontally but not vertically!

As you might remember from the game, the selection cursor rotates horizontally but not vertically; 
that means that if I'm in the leftmost and I try to go left again I'll get to the rightmost 
(examples: from Ryu to Vega, from Ken to M.Bison) and vice versa from rightmost to leftmost.

Instead, if I try to go further up from the upmost or further down from the downmost,
I'll just stay where I am located (examples: you can't go lower than lowest row: Ken, Chun Li, Zangief, Dhalsim, Sagat and M.Bison in the above image;
you can't go upper than highest row: Ryu, E.Honda, Blanka, Guile, Balrog and Vega in the above image).

Test

For this easy version the fighters grid layout and the initial position will always be the same in all tests, only the list of moves change.

Notice: changing some of the input data might not help you.

Examples

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['up', 'left', 'right', 'left', 'left']
then I should get:

['Ryu', 'Vega', 'Ryu', 'Vega', 'Balrog']
as the characters I've been hovering with the selection cursor during my moves. 
Notice: Ryu is the first just because it "fails" the first up See test cases for more examples.

fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]
initial_position = (0,0)
moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right']
Result:

['E.Honda', 'Chun Li', 'Ken', 'M.Bison', 'Sagat', 'Dhalsim', 'Sagat']
*************************************************************************************************************/

function streetFighterSelection(fighters, position, moves){
  let moveArray = [];
  
  for(let i =0; i < moves.length; i++){
    if(moves[i] == 'right'){
      // Move right
position[1] = (position[1] + 1 ) % 6;
moveArray.push((fighters[position[0]][position[1]])); 
    }
    else if(moves[i] == 'left'){
      // Move left
position[1] = (position[1] + 5) % 6;
moveArray.push((fighters[position[0]][position[1]])); 
    }
    else if(moves[i] == 'down'){
      // Move down
position[0] = Math.min(position[0] + 1, 1);
moveArray.push((fighters[position[0]][position[1]])); 
    }
    else if(moves[i] == 'up'){
      // Move up
position[0] = Math.max(position[0] - 1, 0);
moveArray.push((fighters[position[0]][position[1]])); 
    }
  }
  

 return moveArray;
}
