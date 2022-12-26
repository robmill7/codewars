/********************************************************************
atch is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of 
points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
**********************************************************************/


function points(games) {
  let result = [];
  let score = 0;
  games.forEach(x => {
    result = x.split(":");
    if(parseInt(result[0])>parseInt(result[1]))
      score += 3;
    else if(result[0]==result[1])
      score += 1;
    else
      score += 0;
  })
  return score;
}
