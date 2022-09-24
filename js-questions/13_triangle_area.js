/** 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).*/

// link this js file to an HTML file
let userInput = prompt("Type base and height for triangle such as: 23 5");
let arr = userInput.split(" ").map((x) => +x);
let [base, height] = arr;
let area = 0.5 * base * height;
console.log(`The area of your triangle is = ${area}`);

// Show the value on web page
document.getElementById("areaSpan").innerText = area;
