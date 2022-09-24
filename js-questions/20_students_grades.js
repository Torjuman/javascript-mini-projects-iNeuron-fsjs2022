/**
 * 20. Write a code which can give grades to students according to theirs scores:
    - 80-100, A
    - 70-89, B
    - 60-69, C
    - 50-59, D
    - 0-49, F
 */

let studentMark = 80;
if (studentMark >= 80) {
  console.log(`The students grade is A`);
} else if (studentMark >= 70) {
  console.log(`The students grade is B`);
} else if (studentMark >= 60) {
  console.log(`The students grade is C`);
} else if (studentMark >= 50) {
  console.log(`The students grade is D`);
} else {
  console.log(`The students grade is F`);
}
