/*
make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

*/
// *******almost there need to fix alphabetical order of result.**************
function meeting(s) {
  // Split the string into an array of names
  const names = s.toUpperCase().split(';');

  // Sort the names alphabetically by last name, then first name
  const sortedNames = names.sort((a, b) => {
    const [aLastName, aFirstName] = a.split(':');
    const [bLastName, bFirstName] = b.split(':');

    if (aLastName !== bLastName) {
      return aLastName.localeCompare(bLastName);
    } else {
      return aFirstName.localeCompare(bFirstName);
    }
  });

  // Create the formatted result string
  const result = sortedNames.map((name) => {
    const [lastName, firstName] = name.split(':');
    return `(${lastName}, ${firstName})`;
  }).join('');

  return result;
}
/*
// Example usage
const guests = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Raphael:Corwill;Alfred:Corwill;Bjon:Tornbull";
const result = meeting(guests);
console.log(result);
*/
