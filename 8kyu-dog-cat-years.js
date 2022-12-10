  /*
  I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that

  */

var humanYearsCatYearsDogYears = function(humanYears) {
  let cat = 15;
  let dog = 15;
  let yearTwo = 9;
  let yearsLeeft = 4;
  
  if(humanYears == 1){
    return [humanYears,cat,dog];
  }
  else if(humanYears == 2){
    return [humanYears, cat+yearTwo, dog+yearTwo];
  }
  else if(humanYears > 2){
    for( let i = humanYears-2, j = 0; j < humanYears; j++ ){
      cat += 4;
      dog += 5;
      
    }
    
  }
  return [humanYears,cat+1,dog-1];
}
