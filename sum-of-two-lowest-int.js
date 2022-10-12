function sumTwoSmallestNumbers(numbers) {  
 let smallestNums =  numbers.sort((a,b) => a - b).slice(0, 2);
 
 return smallestNums.reduce((a, b) => a + b);
}
