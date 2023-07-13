/*
Reverse every other word in a given string, then return the string. 
Throw away any leading or trailing whitespace, while ensuring there is exactly
one space between each word. Punctuation marks should be treated as if they 
are a part of the word in this kata.
*/

function reverse(str){
  // Remove leading/trailing whitespace and convert multiple spaces into a single space
  str = str.trim().replace(/\s+/g, ' ');

  // Split the string into an array of words
  const words = str.split(' ');

  // Reverse every other word in the array
  const reversedWords = words.map((word, index) => {
    // Reverse the word if its index is odd
    if (index % 2 === 1) {
      return word.split('').reverse().join('');
    }
    return word;
  });

  // Join the reversed words back into a string with proper spacing
  const reversedString = reversedWords.join(' ');

  return reversedString;
}
