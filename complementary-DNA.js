
function DNAStrand(dna){
  //returning complementary DNA 
  
  let otherSide = []
  
  for(let i = 0; i< dna.length; i++){
    switch(dna[i]){
        case 'T':
        otherSide.push('A');
        break;
        case 'A':
        otherSide.push('T');
        break;
        case 'C':
        otherSide.push('G');
        break;
        case 'G':
        otherSide.push('C');
        break;
        
    }
    
  }
  return otherSide.join('');
}
