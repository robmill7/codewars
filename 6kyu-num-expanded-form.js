/*******************************************************************************************************
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

*********************************************************************************************************/


function expandedForm(num, arr = [], m = 1) {
   if(num){
      return expandedForm(Math.floor(num / 10), [m * (num % 10)].concat(arr), m * 10);
   }
  
  // this loop gets rid of zeros in final solution
    var i = arr.length;
    while (i--) {
        if (arr[i] === 0) {
            arr.splice(i, 1);
        }
    }
  
   return arr.join(' + ');
}; 
