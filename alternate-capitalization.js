//Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
//For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
//The input will be a lowercase string with no spaces.

function capitalize(s){
  let evenCaps = []
  let oddCaps =[]
  
  for(let i = 0; i < s.length; i++){      //capitalize even letters put in evenCaps array
    if(i % 2==0){
           evenCaps.push(s[i].toUpperCase())
       }
    else { evenCaps.push(s[i]) }
    
  }
                                    
  
  for(let j = 0; j < s.length; j++){    //capitalize odd letters put in oddCaps array
      if(j % 2==0){
           oddCaps.push(s[j])
       }
    else { oddCaps.push(s[j].toUpperCase()) }
    
  }
      
      return [evenCaps.join(''),oddCaps.join('')];
};
