/**
 *
    - create an empty set
    - Create a set containing 0 to 10 using loop
    - Remove an element from a set
    - Clear a set
    - Create a set of 5 string elements from array
    - Create a map of countries and number of characters of a country
 */

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

// - create an empty set
let set1 = new Set();
console.log(set1);

// - Create a set containing 0 to 10 using loop
for (let i = 0; i <= 10; i++) {
  set1.add(i);
}
console.log(set1);

// - Remove an element from a set
set1.delete(7);
console.log(set1);

// - Clear a set
set1.clear();
console.log(set1);

// - Create a set of 5 string elements from array
let arr = [
  4,
  5,
  8,
  9,
  "Finland",
  "Sweden",
  "Norway",
  "Bangladesh",
  "India",
  3,
  4,
  5,
  7,
];

let arr1 = new Set();
arr.forEach((item) => {
  if (typeof item == "string") {
    arr1.add(item);
  }
});
console.log(arr1);

// - Create a map of countries and number of characters of a country
let countriesMap = new Map();
countries.forEach((item) => {
  countriesMap.set(item, item.length);
});
console.log(countriesMap);
