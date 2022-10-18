function index(array, n){
  
  let num = array[n];
  
  if(n > array.length-1){  //checking to see if n has an index in array
    return -1
  }
  else{
    return Math.pow(num,n) //returning index of n^n 
  }
  
}
