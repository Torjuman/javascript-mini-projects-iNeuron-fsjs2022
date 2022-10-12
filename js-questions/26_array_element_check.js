/**
 * 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
 */

const countriesList = ["Bangladesh", "India", "Pakistan", "SriLanka"];

if (countriesList.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countriesList.push("Ethiopia");
  console.log(countriesList); // output: [ 'Bangladesh', 'India', 'Pakistan', 'SriLanka', 'Ethiopia' ]
}
