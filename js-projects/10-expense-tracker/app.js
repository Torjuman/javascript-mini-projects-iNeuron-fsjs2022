window.onload = () => {
  main();
};

function main() {
  let balanceResult = 0;
  let balanceResultShow = document.getElementById("balance-result");
  let titleInput = document.getElementById("title-input");
  let amountInput = document.getElementById("amount-input");
  let incomeBtn = document.getElementById("income-add-btn");
  let expenseBtn = document.getElementById("expense-add-btn");

  incomeBtn.addEventListener("click", incomeExpenseBtnHandler);

  expenseBtn.addEventListener("click", incomeExpenseBtnHandler);

  // Event handler
  function incomeExpenseBtnHandler() {
    let amountValue = amountInput.value.replace(/\s+/g, "").trim();
    let titleValue = titleInput.value.replace(/\s+/g, " ").trim();
    if (titleValue == " " || titleValue == "") {
      alert("Put title");
    } else if (amountValue == "") {
      alert("Put amount");
    } else {
      if (this.innerText == "Add as Income") {
        balanceResult =
          Number(balanceResultShow.innerText) + Number(amountValue);
      } else if (this.innerText == "Add as Expense") {
        balanceResult =
          Number(balanceResultShow.innerText) - Number(amountValue);
      }

      balanceResultShow.innerText = balanceResult;
      amountInput.value = "";
      titleInput.value = "";
      negBalanceCheck();
      listOfDiv(this.innerText, titleValue, amountValue);
    }
  }

  // Dynamic DOM elements
  function listOfDiv(idText, title, amount) {
    let divPrimery = document.createElement("div");
    let divSecondery = document.createElement("div");
    let divPar = document.createElement("div");
    let titleP = document.createElement("p");
    let amountP = document.createElement("p");

    divPrimery.classList =
      "w-full mt-2 mb-2 flex flex-row bg-lime-200 rounded shadow-lime-4";
    titleP.classList = "text-xl ml-2 p-1";
    amountP.classList = "inline-flex text-xl mr-2 p-1";
    divSecondery.classList = "w-4";
    divPar.classList = "w-full flex flex-row justify-space-between";

    titleP.innerText = title;
    if (idText == "Add as Income") {
      divSecondery.classList.add("bg-lime-600");
      divPar.classList.add("text-lime-600");
      amountP.innerHTML = `+ ${amount} <img src="./images/arrow-trend-up-solid.svg" alt="arrow-trend-up-solid" class="w-6 h-6 ml-2" />`;
    } else if (idText == "Add as Expense") {
      divSecondery.classList.add("bg-crimson-600");
      divPar.classList.add("text-tomato-600");
      amountP.innerHTML = `- ${amount} <img src="./images/arrow-trend-down-solid.svg" alt="arrow-trend-down-solid" class="w-6 h-6 ml-2" />`;
    }

    divPar.append(titleP, amountP);
    divPrimery.append(divSecondery, divPar);
    document.getElementById("result-show").appendChild(divPrimery);
  }

  // Utils
  function negBalanceCheck() {
    if (balanceResult < 0) {
      balanceResultShow.style.color = "rgb(255, 0, 0)";
    }
  }
}
