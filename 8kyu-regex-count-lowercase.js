/*******************************************************************************
Your task is simply to count the total number of lowercase letters in a string.
*******************************************************************************/

function lowercaseCount(str){
// replaces all nonletters with empty string and returns number of letters
return str.replace(/[^a-z]/g, "").length; 
  
}
