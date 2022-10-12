/**
 * 27. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method

 */

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let newAgeArray = ages.sort((a, b) => a - b);

let min = newAgeArray[0],
  max = newAgeArray[newAgeArray.length - 1];

// Sort the array and find the min and max age

console.log(`The sorted array is [${newAgeArray}]`);
console.log(`Min number is ${min} and max number is ${max}`);

// Find the median age(one middle item or two middle items divided by two)

let medianAgeIndex = newAgeArray.length / 2;

console.log(`The median age is ${newAgeArray[medianAgeIndex]}`);

// Find the average age(all items divided by number of items)

let avgAges = 0;

for (let i = 0; i < newAgeArray.length; i++) {
  avgAges += newAgeArray[i];
}
avgAges = avgAges / newAgeArray.length;

console.log(`The average age is ${avgAges}`);

// Find the range of the ages(max minus min)

let rangeAge = max - min;

console.log(`The range of the ages is ${rangeAge}`);

// Compare the value of (min - average) and (max - average), use abs() method

let comAges = Math.abs(min - avgAges) - Math.abs(max - avgAges);

console.log(
  `Compare the value of (min - average) and (max - average) is ${comAges}`
);
