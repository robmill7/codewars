/*
return to the function seven(m) (m integer >= 0) an array (or a pair, depending on the language)
of numbers, the first being the last number m with at most 2 digits obtained by your function 
(this last m will be divisible or not by 7), the second one being the number of steps to get the result.
*/

function seven(m) {
  let steps = 0;
  while (m > 99) {
    const quotient = Math.floor(m / 10);
    const remainder = m % 10;
    m = quotient - 2 * remainder;
    steps++;
  }
  return [m, steps];
}

