/************************************************************************
Given a string made up of letters a, b, and/or c, 
switch the position of letters a and b (change a to b and vice versa).
Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
**************************************************************************/

function switcheroo(x){
  let string = x.split('');
  let switched = [];
//looping through string array to find 'a' and switch it to 'b' then push it to switched array
for(let i=0; i< string.length; i++){
  if(string[i] == 'a'){
    switched.push('b')
  }
  else if(string[i] == 'b'){
    switched.push('a')
  }
  else{
    switched.push(string[i])
  }
}
  return switched.join('')

}
