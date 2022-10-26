
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

document.getElementById("start").addEventListener("click", startHandler);
document.getElementById("stop").addEventListener("click", stopHandler);
document.getElementById("reset").addEventListener("click", resetHandler);

let countHours = 0;
let countMinutes = 0;
let countSeconds = 0;

let intervalId;

function startHandler() {
    if(!intervalId){
        intervalId = setInterval(intervalHandler, 1000);
    }
}

function intervalHandler() {
    countSeconds = countSeconds + 1;
        if(countSeconds > 59) {
            countSeconds = 0;
            countMinutes = countMinutes + 1
            if(countMinutes > 59) {
                countMinutes = 0
                countHours = countHours + 1
                hours.innerText = countHours < 10 ? "0" + countHours : countHours;
            }
            minutes.innerText = countMinutes < 10 ? "0" + countMinutes : countMinutes;
        }
    seconds.innerText = countSeconds < 10 ? "0" + countSeconds : countSeconds;
}

function stopHandler() {
    clearInterval(intervalId);
    intervalId = null;
}

function resetHandler() {
    clearInterval(intervalId);
    intervalId = null;
    countHours = 0;
    countMinutes = 0;
    countSeconds = 0;
    hours.innerText = "00";
    minutes.innerText = "00";
    seconds.innerText = "00";
    nenuSeconds.innerText = "00";
}
