function pigIt(str){
    str = str.split(' ');
    let strArray = [];
    
    // loop through string to find '!' and '?' 
    // then add "ay" to the end of the word
    
    for (let i=0; i < str.length; i++){
      if(str[i] == '!'|| str[i] == '?'){
        strArray.push(str[i]);
      }
      else{
      strArray.push( str[i].substring(1) + str[i].slice(0,1) +'ay');
    }
      }
    return strArray.join(' ');
  }