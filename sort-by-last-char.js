/*
Given a string of words (x), you need to return an array of the words, 
sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show 
them in the order they appeared in the given string.

All inputs will be valid.
*/

function last(x){
  let words = x.split(" ");
  words.sort(function(a, b) {
    if (a.slice(-1) === b.slice(-1)) {
      // If the last characters are the same, sort based on original order
      return x.indexOf(a) > x.indexOf(b) ? 1 : -1;
    } else {
      // Otherwise, sort based on the last character
      return a.slice(-1) > b.slice(-1) ? 1 : -1;
    }
  });
  return words;
}
