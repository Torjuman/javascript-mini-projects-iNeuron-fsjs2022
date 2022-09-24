/**
 * 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
 */

// link this js file to an HTML file
let r = prompt("Give a radius of a circle such as : 15");
let pi = 3.14;
let area = pi * r * r;
let circumference = 2 * pi * r;

console.log(
  `the area of a circle is ${area} and circumference of a circle ${circumference}`
);

// Show the value on web page
document.getElementById("areaSpan").innerText = area;
document.getElementById("circumferenceSpan").innerText = circumference;
