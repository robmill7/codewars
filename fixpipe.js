// removing duplicate numbers and putting them in order

function pipeFix(numbers){
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  //making new array for numbers
  let newNumbers =[];
  
  //looping through numbers then pushing values to new array
  for(let i= min; i<= max; i++){
    newNumbers.push(i);
  }
  return newNumbers;
}
