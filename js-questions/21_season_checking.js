/**
 * 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer
 */

let userInput = prompt("Enter month name:");
userInput = userInput.toLowerCase();
let season = "";

if (
  userInput == "september" ||
  userInput == "october" ||
  userInput == "november"
) {
  console.log("The season is Autumn");
  season = "Autumn";
} else if (
  userInput == "december" ||
  userInput == "january" ||
  userInput == "february"
) {
  console.log("The season is Winter");
  season = "Winter";
} else if (userInput == "march" || userInput == "april" || userInput == "may") {
  console.log("The season is Spring");
  season = "Spring";
} else if (
  userInput == "june" ||
  userInput == "july" ||
  userInput == "august"
) {
  console.log("The season is Summer");
  season = "Summer";
} else {
  console.log("not a valid month");
  season = "not a valid season";
  userInput = "not a valid month";
}

// Show on web page
document.getElementById("span1").innerText = userInput;
document.getElementById("span2").innerText = season;
