/******************************************************************************************************************************************************
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*********************************************************************************************************************************************************/

const vowelMap = new Map();

vowelMap.set('a', 1);
vowelMap.set('e', 2);
vowelMap.set('i', 3);
vowelMap.set('o', 4);
vowelMap.set('u', 5);

//loop though string to check for vowels and store in encodedString[] 
function encode(string) {
  let encodedString = []
  for(let i = 0; i < string.length; i++){
    switch(string[i]){
        case 'a': encodedString.push(vowelMap.get('a'))
        break;
        case 'e': encodedString.push(vowelMap.get('e'))
        break;
        case 'i': encodedString.push(vowelMap.get('i'))
        break;
        case 'o': encodedString.push(vowelMap.get('o'))
        break;
        case 'u': encodedString.push(vowelMap.get('u'))
        break;
        default : encodedString.push(string[i])
    }
  }
  //returning encoded string with vowels replaced with numbers
  return encodedString.join('')
}

const vowelMap2 = new Map();

vowelMap2.set('1', 'a');
vowelMap2.set('2', 'e');
vowelMap2.set('3', 'i');
vowelMap2.set('4', 'o');
vowelMap2.set('5', 'u');

//loop through string replacing numbers with vowels and storing in decodedString[]
function decode(string) {
  let decodedString = []
  

  for(let i = 0; i < string.length; i++){
    switch(string[i]){
        case '1': decodedString.push(vowelMap2.get('1'))
        break;
        case '2': decodedString.push(vowelMap2.get('2'))
        break;
        case '3': decodedString.push(vowelMap2.get('3'))
        break;
        case '4': decodedString.push(vowelMap2.get('4'))
        break;
        case '5': decodedString.push(vowelMap2.get('5'))
        break;
        default : decodedString.push(string[i])
    }
  }
  //returning decoded string with numbers replaced by vowels 
  return decodedString.join('')
}
  
  
