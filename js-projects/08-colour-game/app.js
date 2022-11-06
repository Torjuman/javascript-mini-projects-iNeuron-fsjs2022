window.onload = () => {
  let colourArray = [
    "rgb(220, 38, 38)",
    "rgb(217, 119, 6)",
    "rgb(234, 88, 12)",
    "rgb(202, 138, 4)",
    "rgb(101, 163, 13)",
    "rgb(22, 163, 74)",
    "rgb(5, 150, 105)",
    "rgb(13, 148, 136)",
    "rgb(8, 145, 178)",
    "rgb(2, 132, 199)",
    "rgb(37, 99, 235)",
    "rgb(79, 70, 229)",
    "rgb(124, 58, 237)",
    "rgb(147, 51, 234)",
    "rgb(192, 38, 211)",
    "rgb(219, 39, 119)",
    "rgb(225, 29, 72)",
  ];
  let colourArrayLength = colourArray.length;
  let userScore = 0;
  let computerScore = 0;
  let colourPalletDiv = document.getElementById("colour-pallet");

  function colourPallet(colour) {
    let inp = document.createElement("input");
    inp.classList = "btn w-20 h-20 rounded shadow cursor-pointer";
    inp.type = "button";
    inp.style.backgroundColor = colour;
    colourPalletDiv.appendChild(inp);
  }

  colourArray.forEach((item) => {
    colourPallet(item);
  });

  function pickColourByComputer() {
    return colourArray[Math.floor(Math.random() * colourArrayLength)];
  }

  let userColourPick = document.getElementById("user-colour-pick");
  let computerColourPick = document.getElementById("computer-colour-pick");
  let userScoreResult = document.getElementById("user-score");
  let computerScoreResult = document.getElementById("computer-score");

  let btn = document.querySelectorAll(".btn");
  btn.forEach((item) => {
    item.addEventListener("click", function (event) {
      let result = document.getElementById("result");
      let userValue = event.currentTarget.style.backgroundColor;
      let computerValue = pickColourByComputer();

      userColourPick.style.backgroundColor = userValue;
      computerColourPick.style.backgroundColor = computerValue;

      if (userValue == computerValue) {
        userScore = userScore + 1;
        userScoreResult.innerText =
          userScore < 10 ? "0" + userScore : userScore;
        result.innerText = "You Have Won The Game!";
      } else {
        computerScore = computerScore + 1;
        computerScoreResult.innerText =
          computerScore < 10 ? "0" + computerScore : computerScore;
        result.innerText = "You Have Lose The Game!";
      }
    });
  });
};
