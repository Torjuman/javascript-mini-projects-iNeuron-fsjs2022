window.onload = () => {
  let count = 0;
  let winCounter = 0;
  let looseCounter = 0;
  let disabledItemm;
  let selections = [];
  let listOfFruit = [
    "apples",
    "pears",
    "oranges",
    "plums",
    "bananas",
    "mangoes",
    "strawberries",
    "raspberries",
    "blueberries",
    "watermelons",
    "rockmelons",
  ];
  let listOfFruitLength = listOfFruit.length;
  let cardDiv = document.getElementById("card-div");
  let winCounterSpan = document.getElementById("win-counter-span");
  let looseCounterSpan = document.getElementById("loose-counter-span");
  for (let i = 0; i < 20; i++) {
    let fruitIndex = Math.floor(Math.random() * listOfFruitLength);
    let btn = document.createElement("button");
    btn.classList = "card";
    btn.setAttribute("fruit", listOfFruit[fruitIndex]);
    btn.innerText = listOfFruit[fruitIndex];
    cardDiv.appendChild(btn);
  }

  let card = document.querySelectorAll(".card");

  card.forEach((item) => {
    item.addEventListener("click", function () {
      if (count === 0) {
        count = count + 1;
        selections.push(item.getAttribute("fruit"));
        item.disabled = true;
        disabledItemm = item;
      } else {
        count = 0;
        selections.push(item.getAttribute("fruit"));
        if (selections[0] === selections[1]) {
          winCounter = winCounter + 1;
          winCounterSpan.innerText = winCounter;
          selections = [];
        } else {
          looseCounter = looseCounter + 1;
          looseCounterSpan.innerText = looseCounter;
          selections = [];
        }
        disabledItemm.disabled = false;
      }
    });
  });
};
