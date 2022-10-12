/**
 * 28. Use for loop to iterate from 0 to 100 and print only prime numbers
 */
const primeArr = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];
for (let i = 0; i <= 100; i++) {
  if (primeArr.includes(i)) {
    console.log(`the prime number is ${i}`);
  }
}
