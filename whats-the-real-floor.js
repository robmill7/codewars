//Write a function that given a floor in the american system returns the floor in the european system.

//With the 1st floor being replaced by the ground floor and the 13th floor being removed,
 //the numbers move down to take their place. In case of above 13, they move down by two
//because there are two omitted numbers below them.

//Basements (negatives) stay the same as the universal level.

function getRealFloor(n) {
 if(n >= 13){     //floors are greater than 13 subtract floors 1 and 13
   return n - 2
 }
  else if(n < 13 && n > 0){   //floors less than 13 but not lower than 0 subtract floor 1
    return n - 1
  }
  else if(n <= 0){    //floors less than or equal to zero are returned as is
    return n
  }
}
