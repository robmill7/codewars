/*
write a module that can calculate the amount of button presses required for any phrase.
Punctuation can be ignored for this exercise. 
Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters
(but you should allow your module to accept 
input in either for convenience).

Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26
letters by hand, try to avoid doing so! 
(Imagine you work at a phone manufacturer who might be testing out different keyboard
layouts, and you want to be able to test new ones rapidly.)
*/

var buttons = {
    
  1: ['1'],
  2: ['A','B','C','2'],
  3: ['D','E','F','3'],
  4: ['G','H','I','4'],
  5: ['J','K','L','5'],
  6: ['M','N','O','6'],
  7: ['P','Q','R','S','7'],
  8: ['T','U','V','8'],
  9: ['W','X','Y','Z','9'],
  0: [' ','0'],
  '*':['*'],
  '#':['#']
    
};
function presses(phrase) { 
  return phrase
    .toUpperCase()
    .split('')
    .map( 
      (elm) => Object
                .keys(buttons)
                .map( 
                  (current) => buttons[current].indexOf(elm) + 1
                )
      
    )
    .reduce( 
      (sum,current) => sum + current.reduce( (count,val) => count+val ,0) 
    ,0);
      
}
