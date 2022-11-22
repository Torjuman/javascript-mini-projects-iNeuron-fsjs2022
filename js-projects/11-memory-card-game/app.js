window.onload = () => {
  let count = 0;
  let winCounter = 0;
  let looseCounter = 0;
  let disabledItemm;
  let selections = [];
  let listOfFruit = [
    { imgSrc: "./images/apples.jpg", fruitName: "apples" },
    { imgSrc: "./images/bananas.jpg", fruitName: "bananas" },
    { imgSrc: "./images/blueberries.jpg", fruitName: "blueberries" },
    { imgSrc: "./images/bananas.jpg", fruitName: "bananas" },
    { imgSrc: "./images/mangos.jpg", fruitName: "mangos" },
    { imgSrc: "./images/oranges.jpg", fruitName: "oranges" },
    { imgSrc: "./images/pears.jpg", fruitName: "pears" },
    { imgSrc: "./images/plums.jpg", fruitName: "plums" },
    { imgSrc: "./images/raspberries.jpg", fruitName: "raspberries" },
    { imgSrc: "./images/strawberries.jpg", fruitName: "strawberries" },
    { imgSrc: "./images/watermelons.jpg", fruitName: "watermelons" },
  ];
  let listOfFruitLength = listOfFruit.length;
  let cardDiv = document.getElementById("card-div");
  let winCounterSpan = document.getElementById("win-counter-span");
  let looseCounterSpan = document.getElementById("loose-counter-span");
  for (let i = 0; i < 20; i++) {
    let fruitIndex = Math.floor(Math.random() * listOfFruitLength);
    let btn = document.createElement("button");
    let imgFruit = document.createElement("img");

    btn.classList = "card w-150px p-4 rounded shadow-blue-4";
    imgFruit.classList = "object-center object-cover rounded opacity-0";
    imgFruit.src = listOfFruit[fruitIndex].imgSrc;

    btn.setAttribute("fruit", listOfFruit[fruitIndex].fruitName);
    imgFruit.setAttribute("alt", "fruits image");

    btn.appendChild(imgFruit);
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
        item.firstChild.classList.add("opacity-1");
        item.firstChild.classList.remove("opacity-0");
      } else {
        count = 0;
        selections.push(item.getAttribute("fruit"));
        item.firstChild.classList.add("opacity-1");
        item.firstChild.classList.remove("opacity-0");

        if (selections[0] === selections[1]) {
          winCounter = winCounter + 1;
          winCounterSpan.innerText = winCounter;
          disabledItemm.classList.remove("bg-orange-400");
          item.classList.remove("bg-orange-400");
          disabledItemm.classList.add("bg-emerald-400");
          item.classList.add("bg-emerald-400");
          selections = [];
        } else {
          looseCounter = looseCounter + 1;
          looseCounterSpan.innerText = looseCounter;
          selections = [];
          disabledItemm.classList.remove("bg-emerald-400");
          item.classList.remove("bg-emerald-400");
          disabledItemm.classList.add("bg-orange-400");
          item.classList.add("bg-orange-400");
        }
        disabledItemm.disabled = false;
      }
    });
  });
};
