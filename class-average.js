//There was a test in your class and you passed it. Congratulations!
//But you're an ambitious person. You want to know if you're better than the average student in your class.

//You receive an array with your peers' test scores. Now calculate the average and compare your score!

//Return True if you're better, else False!

//Note:
//Your points are not included in the array of your class's points. 
//For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  let totalNumber = classPoints.length;
  let initialValue = 0;
  let sumOfClass = classPoints.reduce((acc, c) => acc + c,  initialValue);
  
  //finding average grade of class
  let average = sumOfClass  / totalNumber;    
  
  //returning true if your points are higher than the class average false if not
  if(average <= yourPoints){                
    return true
  }
  else{
    return false
  }
  
}
