let n = 46288;
let p = 3;


function digPow(n, p){
    let numArray = Array.from(n);
     
     for (let i = 0; i <= numArray.length-1; i++){
       Math.pow(i,p);
       p++;
     }
     
   }
console.log(numArray)