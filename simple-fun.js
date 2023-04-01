/*
“You have to take 3 index i,j,k such that i<j<k and str[i] =‘o’,str[j]=’d’,str[k]=’d’ and cut 
them from the string and make a new string “odd”. How many string you can make?”

Mr.Odd wants to impress his gf so he want to make maximum number of “odd”. As he is lazy, 
he ask you to help him and tell him maximum number of “odd” he an make.

Example
For str="oudddbo", the result should be 1.

"oudddbo"(cut 1 odd)--> ".u..dbo"(no more odd)

For str="ooudddbd", the result should be 2.

"ooudddbd"(cut 1st odd)--> ".ou..dbd"(cut 2nd odd) --> "..u...b."

Input/Output
[input] string str
a non-empty string that contains only lowercase letters.

0 < str.length <= 10000

[output] an integer
the maximum number of "odd".
*/

function odd(str) {
  var o=0,d=0,r=0
  for(var c of str){
    if(c=="o") o++
    if(o&&c=="d") d++
    if(o&&d>1) r++,d-=2,o--
  }
  return r
}
