/**************************************
You have to write a comparator function which can sort the lines back into their correct order,
otherwise Christmas will be cancelled!

Reminder: Below is what the final verse should look like

On the 12th day of Christmas my true love gave to me
12 drummers drumming,
11 pipers piping, 
10 lords a leaping, 
9 ladies dancing, 
8 maids a milking,
7 swans a swimming, 
6 geese a laying, 
5 golden rings, 
4 calling birds,
3 French hens, 
2 turtle doves and 
a partridge in a pear tree.
*****************************************/



var comparator = function(a,b) {
 
   if (a[0] =='a'|| b[0] == 'O') {
    return 1;
  }
  if (a[0] =='O'|| b[0] == 'a') {
    return -1;
  }
  if (Number.parseInt(a) < Number.parseInt(b)) {
    return 1;
  }
  return -1
  
}
