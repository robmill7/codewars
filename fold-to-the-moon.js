/*
a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many 
times you have to fold the paper to make the paper reach this distance.
(If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

if somebody is giving you a negative distance, it's clearly bogus and you should yell at them by 
returning null (or whatever equivalent in your language). In Shell please return None. In C and COBOL please return -1.
*/

function foldTo(distance) {
  let paper = 0.0001;
  let folds = 0;
  if (distance <= 0) {
    return null;
  } else {
    while ( distance > paper ) {
      paper *= 2;
      folds += 1;
    }
  }
  return folds;
}
