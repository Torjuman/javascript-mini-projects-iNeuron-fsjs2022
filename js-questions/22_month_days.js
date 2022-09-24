/**
 * 22. Write a program which tells the number of days in a month.
 * September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
 */

let userInput = prompt("Enter month name:");
userInput = userInput.toLowerCase();
let month = document.getElementById("span");

switch (userInput) {
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
    console.log(`February has 28 days`);
    month.innerText = `February has 28 days`;
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
