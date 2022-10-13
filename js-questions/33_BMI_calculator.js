/**
 * 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more
 */

function BMIcalculation(weight, height) {
  let m2 = height * height;
  let bmi = weight / m2;
  if (bmi < 18.5) {
    //   - Underweight: BMI is less than 18.5
    console.log(`Your BMI score is ${bmi} and you are Underweight.`);
  } else if (bmi >= 18.5 && bmi < 25) {
    // - Normal weight: BMI is 18.5 to 24.9
    console.log(`Your BMI score is ${bmi} and you are Normal weight.`);
  } else if (bmi >= 25 && bmi < 30) {
    // - Overweight: BMI is 25 to 29.9
    console.log(`Your BMI score is ${bmi} and you are Overweight.`);
  } else {
    // - Obese: BMI is 30 or more
    console.log(`Your BMI score is ${bmi} and you are Obese.`);
  }
}

BMIcalculation(60, 2);
BMIcalculation(65, 1.61544);
BMIcalculation(45, 1.3);
BMIcalculation(45, 1);
