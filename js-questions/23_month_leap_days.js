/**
 * 23. Write a program which tells the number of days in a month, now consider leap year.
 */

let userInput = prompt(
  "Enter month name and year: use comma(,) between months and year"
);
userInput = userInput.toLowerCase();
let userInputArr = userInput.split(",");
let userInputMonth = userInputArr[0],
  userInputYear = parseInt(userInputArr[1]);
let month = document.getElementById("span1");
document.getElementById("span2").innerText = userInputYear;
let leapYear = false;
let leapYearChecked = 0;

async function callbackAsync() {
  if (userInputYear % 4 == 0) {
    leapYear = true;
    if (userInputYear % 100 == 0 && userInputYear % 400 == 0) {
      leapYear = true;
    } else {
      leapYear = false;
    }
  } else {
    leapYear = false;
  }

  await new Promise(() => {
    leapYearChecked = leapYear
      ? (leapYearChecked = 29)
      : (leapYearChecked = 28);
    return leapYearChecked;
  });
}

callbackAsync();

switch (userInputMonth) {
  case "september":
    console.log(`September has 30 days`);
    month.innerText = `September has 30 days`;
    break;
  case "october":
    console.log(`October has 31 days`);
    month.innerText = `October has 31 days`;
    break;
  case "november":
    console.log(`November has 30 days`);
    month.innerText = `November has 30 days`;
    break;
  case "december":
    console.log(`December has 31 days`);
    month.innerText = `December has 31 days`;
    break;
  case "january":
    console.log(`January has 31 days`);
    month.innerText = `January has 31 days`;
    break;
  case "february":
    console.log(`February has ${leapYearChecked} days`);
    month.innerText = `February has ${leapYearChecked} days`;
    break;
  case "march":
    console.log(`March has 31 days`);
    month.innerText = `March has 31 days`;
    break;
  case "april":
    console.log(`April has 30 days`);
    month.innerText = `April has 30 days`;
    break;
  case "may":
    console.log(`May has 31 days`);
    month.innerText = `May has 31 days`;
    break;
  case "june":
    console.log(`June has 30 days`);
    month.innerText = `June has 30 days`;
    break;
  case "july":
    console.log(`July has 31 days`);
    month.innerText = `July has 31 days`;
    break;
  case "august":
    console.log(`August has 31 days`);
    month.innerText = `August has 31 days`;
    break;
  default:
    console.log(`Provied a valid month`);
    month.innerText = `Provied a valid month`;
    break;
}
