/**
 * 12. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, baseYear to now.
 */

let date = new Date();
let one = 1;
let currentYear = date.getFullYear();
let currentMonth = date.getMonth() + one;
let currentDate = date.getDate();
let currentHours = date.getHours();
let currentMinutes = date.getMinutes();
let currentSeconds = date.getSeconds();

console.log(`What is the year today? = ${currentYear}`);
console.log(`What is the month today as a number? = ${currentMonth}`);
console.log(`What is the date today? = ${currentDate}`);
console.log(`What is the day today as a number? = ${date.getDay()}`);
console.log(`What is the hours now? = ${currentHours}`);
console.log(`What is the minutes now? = ${currentMinutes}`);

function secElapsed() {
  let sixty = 60,
    tweentFour = 24,
    baseYear = 1970,
    january = 31,
    fabruary = 28,
    march = 31,
    april = 30,
    may = 31,
    june = 30,
    july = 31,
    august = 31,
    september = 30,
    october = 31,
    november = 30;
  let todayMinutes = currentHours * sixty + currentMinutes;
  let todaySeconds = todayMinutes * sixty + currentSeconds;
  let secondsInOneYear = 365 * tweentFour * sixty * sixty;
  let tillYearToSeconds = (currentYear - baseYear) * secondsInOneYear;
  let leapYearCount = Math.round((currentYear - baseYear) / 4) - one;
  let tillLeapYearSeconds = leapYearCount * tweentFour * sixty * sixty;
  let tillDateToDay = currentDate;
  switch (currentMonth) {
    case one:
      //   january
      break;
    case 2:
      //   february
      tillDateToDay = tillDateToDay + january - one;
      break;
    case 3:
      //   march
      tillDateToDay = tillDateToDay + january + fabruary - one;
      break;
    case 4:
      //   april
      tillDateToDay = tillDateToDay + january + fabruary + march - one;
      break;
    case 5:
      //   may
      tillDateToDay = tillDateToDay + january + fabruary + march + april - one;
      break;
    case 6:
      //   june
      tillDateToDay =
        tillDateToDay + january + fabruary + march + april + may - one;
      break;
    case 7:
      //   july
      tillDateToDay =
        tillDateToDay + january + fabruary + march + april + may + june - one;
      break;
    case 8:
      //   august
      tillDateToDay =
        tillDateToDay +
        january +
        fabruary +
        march +
        april +
        may +
        june +
        july -
        one;
      break;
    case 9:
      //   september
      tillDateToDay =
        tillDateToDay +
        january +
        fabruary +
        march +
        april +
        may +
        june +
        july +
        august -
        one;
      break;
    case 10:
      //   october
      tillDateToDay =
        tillDateToDay +
        january +
        fabruary +
        march +
        april +
        may +
        june +
        july +
        august +
        september -
        one;
      break;
    case 11:
      //   november
      tillDateToDay =
        tillDateToDay +
        january +
        fabruary +
        march +
        april +
        may +
        june +
        july +
        august +
        september +
        october -
        one;
      break;
    case 12:
      //   december
      tillDateToDay =
        tillDateToDay +
        fabruary +
        march +
        april +
        may +
        june +
        july +
        august +
        september +
        october +
        november -
        one;
      break;
  }
  let tillDateToSeconds = tillDateToDay * tweentFour * sixty * sixty;
  let totalSeconds =
    tillYearToSeconds + tillLeapYearSeconds + tillDateToSeconds + todaySeconds;
  console.log(
    `The numbers of seconds elapsed from January 1, 1970 to now = ${totalSeconds}`
  );
}

secElapsed();
