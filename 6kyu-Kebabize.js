/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

"camelsHaveThreeHumps"  -->  "camels-have-three-humps"
"camelsHave3Humps"  -->  "camels-have-humps"
"CAMEL"  -->  "c-a-m-e-l"
*/

function kebabize(str) {
  // getting rid of numbers and splitting string by uppercase letters
  let splitStr = str.replace(/\d+/g, '').split(/(?=[A-Z])/);
  
  // taking new array and making all letters lowercase and join with '-'
  let lowercaseArr = splitStr.map(str => str.toLowerCase());
  
  return lowercaseArr.join('-');
  
}
