/**************************************************************************
Write function parseF which takes an input and returns a number or null if conversion is not possible.
The input can be one of many different types so be aware.
**************************************************************************/

function parseF(input) {
  if (typeof input === 'number') {
    return input;
  } 
  // checking string and convert to number if possible
  else if (typeof input === 'string') {
    const number = parseFloat(input);
    return isNaN(number) ? null : number;
  } 
  else if (typeof input === 'boolean') {
    return null;
  } 
  else {
    return null;
  }
}
