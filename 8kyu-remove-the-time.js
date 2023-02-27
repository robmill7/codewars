/**************************************************************************************************
Write a function, shortenToDate, that takes the Website date/time in its original string format,
and returns the shortened format.

Assume shortenToDate's input will always be a string, e.g. "Friday May 2, 7pm".
Assume shortenToDate's output will be the shortened string, e.g., "Friday May 2".
***************************************************************************************************/

function shortenToDate(longDate) {
  // turn longDate string into an array and seperating it by the ',' then returning first index of array
  return longDate.split(',')[0]
}
