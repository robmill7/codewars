function duplicateCount(text){
  //sorting text by alph order and making all letters lowercase 
  let sortedText = text.toLowerCase().split('').sort().join('');
  
  //storing duplicate letters 
  let count = [];
  
  //pushing duplcates to count
  for(let i=0; i < sortedText.length; i++){
    if(sortedText[i] == sortedText[i+1]){
      count.push(sortedText[i]);
    }
    
  }
  //filtering count for duplicates and returning number of letters left
  let uniqueChars = count.filter((c, index) => {
    return count.indexOf(c) === index;
});
  
  return uniqueChars.length;
  
  
  
}
