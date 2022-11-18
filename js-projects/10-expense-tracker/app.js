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
    let titleP = document.createElement("p");
    let amountP = document.createElement("p");

    titleP.innerText = title;
    if (idText == "Add as Income") {
      amountP.innerText = `+${amount}`;
      divSecondery.innerText = "+";
    } else if (idText == "Add as Expense") {
      amountP.innerText = `-${amount}`;
      divSecondery.innerText = "-";
    }

    divPrimery.append(divSecondery, titleP, amountP);
    document.getElementById("result-show").appendChild(divPrimery);
  }

  // Utils
  function negBalanceCheck() {
    if (balanceResult < 0) {
      balanceResultShow.style.color = "rgb(255, 0, 0)";
    } else {
      balanceResultShow.style.color = "rgb(0, 255, 0)";
    }
  }
}
