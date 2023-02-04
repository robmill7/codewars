/*************************************************************************************
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
************************************************************************************/

multiplicationTable = function(size) {
  var x = [];
  
  //storing iterations for i * j in y array then usng y to populate the x array
  for (let i = 1; i <= size; i++){
    let y = []
    for(let j = 1; j <= size; j++){
      
      y.push(i*j)
}
x.push(y)
      

    }
  //console log to see results
    console.log(x);
  return x
  }
  
  
  

