/*************************************************************************************************************
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

**************************************************************************************************************/




function accum(s) {
  var ans = []
  
	 for( let i = 0; i < s.length; i++){    // putting letters in ans array repeated based on what order they come in
     ans.push(s[i].repeat(i+1))
     
   }
  function capitalizeWords(arr) {
  return arr.map(element => {
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();    // function to take array and capitolize first letter of each string
  });
}
  return(capitalizeWords(ans)).join('-');   // return letters connected by '-'
}
