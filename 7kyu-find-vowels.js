/***************************************************************************
We want to know the index of the vowels in a given word, for example, 
there are two vowels in the word super (the second and fourth letters).

So given a string "super", we should return a list of [2, 4].

Some examples:
Mmmm  => []
Super => [2,4]
Apple => [1,5]
YoMama -> [1,2,4,6]
NOTES
Vowels in this context refers to: a e i o u y (including upper case)
This is indexed from [1..n] (not zero indexed!)

**************************************************************************/

function vowelIndices(word){
  
  let letters = word.toLowerCase().split('');
  var vowels = 'aeiouy'
  var indices = [];
  
for(var i=0; i<letters.length;i++) {
    if (letters[i].includes('a')){
      indices.push(i+1);
    } 
  else if(letters[i].includes('e')){
    indices.push(i+1);
  }
  else if(letters[i].includes('i')){
    indices.push(i+1);
  }
  else if(letters[i].includes('o')){
    indices.push(i+1);
  }
  else if(letters[i].includes('u')){
    indices.push(i+1);
  }
  else if(letters[i].includes('y')){
    indices.push(i+1);
  }
}
  return indices
}
