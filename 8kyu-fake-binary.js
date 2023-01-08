/*************************************************************

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
Return the resulting string.

Note: input will never be an empty string

**************************************************************/



function fakeBin(x){
  var num = [];
  for (let i = 0; i < x.length; i++) {
    if(x[i] >= '5'){
      num.push('1');
    }
    else{
            num.push('0');
    }
  
}
  return num.join('')
}
