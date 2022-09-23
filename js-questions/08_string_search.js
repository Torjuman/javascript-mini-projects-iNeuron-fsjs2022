/**
 * 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
 */

let str =
  "You cannot end a sentence with because because because is a conjunction";

let searchFor = "because";

console.log(
  `The position of the first occurrence of the word because in that sentence: ${str.search(
    searchFor
  )}`
); // Output: The position of the first occurrence of the word because in that sentence: 31
