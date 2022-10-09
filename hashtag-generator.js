function generateHashtag (str) {
  
    let wordArray = str.split(' ').filter(char => char !== "");
    let result = "#";
    
    if (wordArray.length === 0) {
      return false;
    };
    
    result = result + wordArray.map(word => {
      let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      return capitalizedWord;
    }).join('');
    
    if(result.length > 140) {
      return false;
    } else{
      return result;
    };
    }