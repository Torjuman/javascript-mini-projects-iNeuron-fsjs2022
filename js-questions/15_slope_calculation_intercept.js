/**
 * 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2
 */

let str = "y = 2x -2";
let arr = str.split(" ");
let xInter = arr[2];
let x = xInter.split("x");
let m = x[0];
console.log(`The slope is = ${m}`);
