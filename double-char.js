function doubleChar(str) {
  // repeating each character in a string once.
  let dblStr = [];
  
  for(let i=0; i< str.length; i++){
    dblStr.push(str[i] + str[i]);
  }
  return dblStr.join('');
}
