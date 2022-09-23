/**
 * 4. Check if the string contains a word Script using includes() method.
 */

let str_1 =
  "high: Signals a high-priority fetch relative to other external Script.";

let str_2 = "There is a name variable.";

function checkScript(str) {
  let result = null;
  if (str.includes("Script")) {
    result = `Yes, there is a word "Script"`;
  } else {
    result = `No, there is no word "Script"`;
  }

  return result;
}

console.log(checkScript(str_1)); // Yes, there is a word "Script"
console.log(checkScript(str_2)); // No, there is no word "Script"
