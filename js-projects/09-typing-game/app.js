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

  startBtn.addEventListener("click", function () {
    typedTextInput.disabled = false;
    stopBtn.disabled = false;
    startBtn.disabled = true;
    typedTextInput.placeholder = "Start Typing";

    if (!intervalId) {
      intervalId = setInterval(() => {
        count = count + 1;
      }, 60000);
    }

    console.log(count);

    randomTextArray = randomText.innerText.split(" ");
  });

  stopBtn.addEventListener("click", function () {
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

    console.log(count);

    document.getElementById("correct-word").innerText = correctWord;
    document.getElementById("incorrect-word").innerText = incorrectWord;
    document.getElementById("not-typed-word").innerText = notTypedWord;
    document.getElementById("total-words").innerText = randomTextArray.length;

    clearInterval(intervalId);
    intervalId = null;

    typedTextInput.value = "";
    typedTextArray = [];

    correctWord = 0;
    incorrectWord = 0;
    notTypedWord = 0;
  });
};
