  /*
  Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers,
where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.


 */


function rowWeights(array){
  let t1 = [];
  let t2 = [];
  
  for(let i=0; i < array.length; i++){  // putting even values in t1 array and odd values in t2 array
    if ( i%2 == 0 ){
      t1.push(array[i]);
  }
    else{
      t2.push(array[i]);
    }
   }
  
  /*sum t1 array and t2 array then return array with summed values,
  reduced t2 with initilal value of 0 in case the original array has only one value.
  */
  let t1Sum = t1.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
  let t2Sum = t2.reduce(
  (accumulator, currentValue) => accumulator + currentValue,0
);
  return [t1Sum,t2Sum]
}
