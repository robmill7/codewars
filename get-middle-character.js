function getMiddle(s)
{  //checking if word is an even length
  //if word is odd length return only one letter
  //if it is even return middle two letters
     var position;
    var length;

    if(s.length % 2 == 1) {   
        position = s.length / 2;
        length = 1;
    } else {
        position = s.length / 2 - 1; 
        length = 2;
    }
        
  //returning middle letter or letters
      return s.substring(position, position + length) 
}
