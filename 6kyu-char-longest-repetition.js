/********************************************************************************************
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the 
same l return the first in order of appearance.

For empty string return:

["", 0]
*********************************************************************************************/


function longestRepetition(s) {
  if (s.length === 0) {
    return ["", 0];
  }

  let maxChar = s[0];
  let maxLen = 1;
  let currentChar = s[0];
  let currentLen = 1;

  /*
  loop to iterate over the characters in the string and keeps track 
of the current character and its consecutive repetition length. If the current
character changes, it checks if the length of the previous repetition was longer 
than the current maximum and updates the maximum if necessary
  */
  for (let i = 1; i < s.length; i++) {
    if (s[i] === currentChar) {
      currentLen++;
      if (currentLen > maxLen) {
        maxLen = currentLen;
        maxChar = currentChar;
      }
    } else {
      currentChar = s[i];
      currentLen = 1;
    }
  }

  return [maxChar, maxLen];
}
