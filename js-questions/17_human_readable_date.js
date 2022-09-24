/**
 * 17. Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm
 */

let date = new Date();
let year = date.getUTCFullYear();

let month = date.getMonth() + 1;
month = month < 10 ? "0" + month : month;

let day = date.getDate();
day = day < 10 ? "0" + day : day;

let hours = date.getHours();
hours = hours < 10 ? "0" + hours : hours;

let minutes = date.getMinutes();
minutes = minutes < 10 ? "0" + minutes : minutes;

console.log(`YYYY-MM-DD = ${year}-${month}-${day} ${hours}:${minutes}`);
console.log(`DD-MM-YYYY = ${day}-${month}-${year} ${hours}:${minutes}`);
console.log(`DD/MM/YYYY = ${day}/${month}/${year} ${hours}:${minutes}`);
