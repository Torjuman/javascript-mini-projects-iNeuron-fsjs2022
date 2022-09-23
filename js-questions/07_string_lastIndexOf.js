/**
 * 7. Use lastIndexOf to determine the position of the last occurrence of a script.
 */

let str =
  "7. Use lastIndexOf to determine the position of the last occurrence of a script. And there is another determine word.";

let searchFor = "determine";

console.log(
  `The index of the first word "${searchFor}" from the end is ${str.lastIndexOf(
    searchFor
  )}`
); // Output: The index of the word "determine" from the end is 102
