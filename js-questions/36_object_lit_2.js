/**
1. Create an object literal called personAccount.It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods.Incomes is a set of incomes and its description and expenses is a set of expenses and its description.
 */

const personAccount = {
  firstName: "Torjuman",
  lastName: "Rimon",
  incomes: [
    { privateTution: 6000 },
    { freelanceing: 5000 },
    { partTimeJob: 4000 },
  ],
  expenses: [
    { tutionFee: 4000 },
    { roomRent: 1500 },
    { gasBill: 1500 },
    { electricityBill: 1200 },
    { shopping: 2000 },
    { internetBill: 500 },
    { other: 2500 },
  ],
  totalIncome() {
    let incomeSum = 0;
    this.incomes.forEach((income) => {
      for (const key in income) {
        incomeSum += income[key];
      }
    });
    console.log(`Your total incomes are ${incomeSum}`);
    return incomeSum;
  },
  totalExpenses() {
    let expenseSum = 0;
    this.expenses.forEach((expense) => {
      for (const key in expense) {
        expenseSum += expense[key];
      }
    });
    console.log(`Your total expenses are ${expenseSum}`);
    return expenseSum;
  },
  accountInfo() {
    console.log(`Your A/C name is ${this.firstName} ${this.lastName}.
    \nYour list of incomes are :\n`);
    this.incomes.forEach((income) => {
      console.log(income);
    });
    console.log("\nYour list of expenses are :\n");
    this.expenses.forEach((expense) => {
      console.log(expense);
    });
  },
  addIncome(obj) {
    this.incomes.push(obj);
  },
  addExpense(obj) {
    this.expenses.push(obj);
  },
  accountBalance() {
    console.log(
      `Your A/C balance are ${this.totalIncome() - this.totalExpenses()}`
    );
  },
};

personAccount.accountInfo();
personAccount.totalIncome();
personAccount.totalExpenses();
personAccount.accountBalance();

personAccount.addIncome({ shareMarket: 5000 });
personAccount.addExpense({ travelling: 4000 });

personAccount.accountInfo();
personAccount.totalIncome();
personAccount.totalExpenses();
personAccount.accountBalance();
