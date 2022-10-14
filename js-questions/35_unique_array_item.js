/**35. Write a functions which checks if all items are unique in the array. */

const arr = [2, 4, 3, "t", "y", "t", 2, 3, 5, 6, 3, 1, 2];

function uniqueArrayItems(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array.indexOf(array[i]) === i) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

let unique = uniqueArrayItems(arr);

console.log(unique);
