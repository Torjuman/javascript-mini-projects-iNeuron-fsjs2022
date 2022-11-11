let textArray = [
  "Hi, This is Torjuman Rimon from Bangladesh. As of now, I am a Frontend Webdeveloper and looking forward to Full Stack Webdeveloper. I can make any website's UI clone as you given to me.",
  "Bangladesh is a small and beautiful country in South Asia. We got independence in 1971 from Pakistan after a long war. Because of the sacrifice of millions of freedom fighters we got this country. 16 December is our Victory Day because this day the Pakistani army surrendered.",
  "A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.",
  "Prototypes are the mechanism that we can simply compare this with superpower of an Object. Which can get superpower of inherit something from other. In this article, we explain what a prototype is, and how could use it with simple example. We will not cover this in detail.",
  "We will learn today about four Array methods throughout the article that are used to solve our beecrowd problem. At first, I want to mention brief introduction about these arrays. If you feel bored to read this method, then go to bottom and watch solved code snippet.",
  "JavaScript Hoisting refers to the process where a variable or a function or a class placed. Because of Hoisting, we can get any variable's value or call function before it is declare.",
];

window.onload = () => {
  let randomText = document.getElementById("random-text");
  let typedTextInput = document.getElementById("typed-text-input");
  let startBtn = document.getElementById("start-btn");
  let stopBtn = document.getElementById("stop-btn");

  let randomTextArray = [];
  let typedTextArray = [];
  let correctWord = 0;
  let incorrectWord = 0;
  let notTypedWord = 0;
  let count = 1;
  let intervalId;

  randomText.innerText = textArray[0];
  document.getElementById("refresh").addEventListener("click", refreshHandler);
  startBtn.addEventListener("click", startBtnHandler);

  stopBtn.addEventListener("click", stopBtnHandler);

  // Event Handler
  function refreshHandler() {
    let n = Math.floor(Math.random() * 5);
    randomText.innerText = textArray[n];
    console.log(n);
  }

  function startBtnHandler() {
    typedTextInput.disabled = false;
    stopBtn.disabled = false;
    startBtn.disabled = true;
    typedTextInput.placeholder = "Start Typing";

    if (!intervalId) {
      intervalId = setInterval(() => {
        count = count + 1;
      }, 60000);
    }

    randomTextArray = randomText.innerText.split(" ");
    document.getElementById("total-words").innerText = randomTextArray.length;
  }

  function stopBtnHandler() {
    typedTextInput.disabled = true;
    stopBtn.disabled = true;
    startBtn.disabled = false;
    typedTextInput.placeholder = "Click The Start Button First";

    typedTextArray = typedTextInput.value.split(" ");
    randomTextArray.forEach((item, index) => {
      if (typedTextArray[index] == undefined) {
        notTypedWord = notTypedWord + 1;
      } else if (item == typedTextArray[index]) {
        correctWord = correctWord + 1;
      } else if (typedTextInput.value == "") {
        alert("Type word which is given");
      } else {
        incorrectWord = incorrectWord + 1;
      }
    });

    document.getElementById("word-per-minute").innerText =
      (correctWord + incorrectWord) / count;
    document.getElementById("correct-word").innerText = correctWord;
    document.getElementById("incorrect-word").innerText = incorrectWord;
    document.getElementById("not-typed-word").innerText = notTypedWord;

    clearInterval(intervalId);
    intervalId = null;

    typedTextInput.value = "";
    typedTextArray = [];

    count = 1;
    correctWord = 0;
    incorrectWord = 0;
    notTypedWord = 0;
  }
};
