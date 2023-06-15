/*
Write a function called calculate that takes 3 values. The first and third values are numbers.
The second value is a character. If the character is "+" , "-", "*", or "/", 
the function will return the result of the corresponding mathematical function on the two numbers. 
If the string is not one of the specified characters, the function should return null (throw an ArgumentException in C#).
*/

function calculate(num1, operator, num2) {
  
  // check numbers and operators
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return null; // Return null if num1 or num2 is not a number
  }
  if(num2 == 0 && operator == '/'){return null}
  

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = null; // Return null if operator is not one of the specified characters
      break;
  }

  return result;
}
