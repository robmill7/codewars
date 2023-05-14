/*
You are a renowned poster designer and painter. You are asked to provide 6 posters
all having the same design each in 2 colors. Posters must all have a different color
combination and you have the choice of 4 colors: red, blue, yellow, green. How many
colors can you choose for each poster?

The answer is two since 4 choose 2 = 6. The combinations will be:
{red, blue}, {red, yellow}, {red, green}, {blue, yellow}, {blue, green}, {yellow, green}.

Now same question but you have 35 posters to provide and 7 colors available.
How many colors for each poster? If you take combinations 7 choose 2 you will 
get 21 with the above formula. But 21 schemes aren't enough for 35 posters. 
If you take 7 choose 5 combinations you will get 21 too. Fortunately if you take 7
choose 3 or 7 choose 4 combinations you get 35 and so each poster will have a 
different combination of 3 colors or 5 colors. You will take 3 colors because it's less expensive.

Hence the problem:
knowing m (number of posters to design), knowing n (total number of available colors), 
let us search x (number of colors for each poster so that each poster has a unique
combination of colors and the number of combinations is exactly the same as the number of posters).
*/

function checkchoose(m, n) {
    for (let x = 1; x <= n; x++) {
    if (binomialCoefficient(n, x) === m) {
      return x;
    }
  }
  return -1;
}

function binomialCoefficient(n, k) {
  let result = 1;
  for (let i = 1; i <= k; i++) {
    result *= (n - k + i) / i;
  }
  return Math.round(result);
}
