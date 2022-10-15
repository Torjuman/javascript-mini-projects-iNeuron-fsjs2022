/**
 *
    - Explain the difference between forEach, map, filter, and reduce.
    - Define a callback function before you use it in forEach, map, filter or reduce.
    - Use forEach to console.log each name in the names array.
    - Use forEach to console.log each country in the countries array.
    - Use forEach to console.log each number in the numbers array.
    - Use map to create a new array by changing each country to uppercase in the countries array.
    - Use map to create an array of countries length from countries array.
    - Use map to create a new array by changing each number to square in the numbers array
    - Use map to change to each name to uppercase in the names array
    - Use map to map the products array to its corresponding prices.
    - Use filter to filter out countries containing land.
    - Use filter to filter out countries having six character.
    - Use filter to filter out countries containing six letters and more in the country array.
    - Use filter to filter out country start with 'E';
    - Use filter to filter out only prices with values.
    - Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
    - Use reduce to sum all the numbers in the numbers array.
    - Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
    - Explain the difference between some and every
    - Use some to check if some names' length greater than seven in names array
    - Use every to check if all the countries contain the word land
    - Explain the difference between find and findIndex.
    - Use find to find the first country containing only six letters in the countries array
    - Use findIndex to find the position of the first country containing only six letters in the countries array
    - Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
    - Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
 */

const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// - Explain the difference between forEach, map, filter, and reduce.

// *forEach - It will loop through an array and it traverses every single value are in that array. It can be modified by callbackFn.

// *map - It will same as foEach() but it return a new array.

// *filter - it will traverse the array return somthing based on given conditon in callbackFn.

// *reduce - unlike other array method it will start at 0 index. And it can operation through previous value & current value

// - Define a callback function before you use it in forEach, map, filter or reduce.
// *callback - it is basicaly pass as parameter in a function.
function mainFnForCallback(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

let res = 0;
mainFnForCallback(numbers, (value) => {
  res += value;
});
console.log(res);

// - Use forEach to console.log each name in the names array.
names.forEach((nam) => console.log(nam));

// - Use forEach to console.log each country in the countries array.
countries.forEach((country) => console.log(country));

// - Use forEach to console.log each number in the numbers array.
numbers.forEach((num) => console.log(num));

// - Use map to create a new array by changing each country to uppercase in the countries array.
let countriesUpper = countries.map((country) => country.toUpperCase());
console.log(countriesUpper);

// - Use map to create an array of countries length from countries array.
let countriesLen = countries.map((country) => country.length);
console.log(countriesLen);

// - Use map to create a new array by changing each number to square in the numbers array
let numSq = numbers.map((num) => num * num);
console.log(numSq);

// - Use map to change to each name to uppercase in the names array
let namesUpper = names.map((nam) => nam.toUpperCase());
console.log(namesUpper);

// - Use map to map the products array to its corresponding prices.
let coPrice = products.map((prod) => `${prod.product} => ${prod.price}`);
console.log(coPrice);

// - Use filter to filter out countries containing land.
let landCountry = countries.filter((item) => item.includes("land"));
console.log(landCountry);

// - Use filter to filter out countries having six character.
let sixCharCountry = countries.filter((item) => item.length == 6);
console.log(sixCharCountry);

// - Use filter to filter out countries containing six letters and more in the country array.
let sixMoreCharCountry = countries.filter((item) => item.length >= 6);
console.log(sixMoreCharCountry);

// - Use filter to filter out name start with 'E';
let eCharCountry = names.filter((item) => item.startsWith("E"));
console.log(eCharCountry);

// - Use filter to filter out only prices with values.
let onlyValue = products.filter((item) => typeof item.price == "number");
console.log(onlyValue);

// - Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string") {
      temp.push(arr[i]);
    }
  }

  return temp;
}

let arr = ["Asabeneh", "Mathias", "Elias", "Brook", 2, 3, 4, 5];
let arrCh = getStringLists(arr);
console.log(arr);
console.log(arrCh);

// - Use reduce to sum all the numbers in the numbers array.
let sum = numbers.reduce((preItem, curItem) => preItem + curItem);
console.log(sum);

// - Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

let sentence = countries.reduce(
  (preItem, curItem) => `${preItem}, ${curItem}`,
  "Estonia"
);
console.log(`${sentence} are north European countries`);

// - Explain the difference between some and every
// *some - it will return true if there is any single test passed which is provided by callbackFn.
// *every - it will return true if there are all test passed which is provided by callbackFn.

// - Use some to check if some names' length greater than seven in names array
let someLen = names.some((item) => item.length > 7);
console.log(someLen);

// - Use every to check if all the countries contain the word land
let everyLand = countries.every((item) => item.includes("land"));
console.log(everyLand);

// - Explain the difference between find and findIndex.
// *find - it will return the first value if there is the test passed which is provided by callbackFn.
// *findIndex - it will return the first index number if there is the test passed which is provided by callbackFn.

// - Use find to find the first country containing only six letters in the countries array
let firstSixChar = countries.find((item) => item.length == 6);
console.log(firstSixChar);

// - Use findIndex to find the position of the first country containing only six letters in the countries array
let firstSixCharIndex = countries.findIndex((item) => item.length == 6);
console.log(firstSixCharIndex);

// - Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
let findNorway = countries.findIndex((item) => item.includes("Norway"));
console.log(findNorway);

// - Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
let findRussia = countries.findIndex((item) => item.includes("Russia"));
console.log(findRussia);
