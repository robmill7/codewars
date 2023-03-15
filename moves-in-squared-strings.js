/*
You are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
 hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"
or printed:

vertical mirror   |horizontal mirror   
abcd --> dcba     |abcd --> mnop 
efgh     hgfe     |efgh     ijkl 
ijkl     lkji     |ijkl     efgh 
mnop     ponm     |mnop     abcd 
Task:
Write these two functions
and

high-order function oper(fct, s) where

fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

Examples:
s = "abcd\nefgh\nijkl\nmnop"
oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"
*/

function vertMirror(strng) {
  /* maps over each line reverses  then join them back into a string using join("")
  joins the reversed lines back into a single string using join("\n").*/
  return strng.split("\n").map(line => line.split("").reverse().join("")).join("\n");
}
function horMirror(strng) {
    // reverses the order of the lines and joins them back into a single string
  return strng.split("\n").reverse().join("\n");
}
function oper(fct, s) {
    return fct(s);
}
// use the oper function as a higher-order function to apply either vert_mirror or hor_mirror to the input string s
  console.log(oper(vert_mirror, s));
