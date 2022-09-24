/**
 * 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
 */

// link this js file to an HTML file
let age = prompt("Enter your age:");

if (age >= 18) {
  console.log("You are old enough to drive");
  document.getElementById("span1").innerText = "You are old enough to drive";
} else {
  let haveToWait = 18 - age;
  console.log(`Wait ${haveToWait} year(s), you need to turn 18`);
  document.getElementById(
    "span2"
  ).innerText = `Wait ${haveToWait} year(s), you need to turn 18`;
}

// Show the value on web page
