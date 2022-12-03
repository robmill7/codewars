  /*
  Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
 */


//passing every letter exept vowels
function shortcut (string) {
  let word = string.split('').filter(str => /^[b cdfghjklmnpqrstvwxyz?]/i.test(str));
  
  return word.join('')
}
