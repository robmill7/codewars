function findUniq(arr) {
   return arr.find(
    // The code below runs for every element of the array.
   //    - for each element, it takes the element and checks if
  // first position, is the same as last position in the array
    (item) => arr.indexOf(item) === arr.lastIndexOf(item)
  );
}
