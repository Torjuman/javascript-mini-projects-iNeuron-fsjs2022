window.onload = () => {
  let userInputTaskName = document.getElementById("user-input-task-name");
  let taskDate = document.getElementById("user-input-task-date");
  let taskTime = document.getElementById("user-input-task-time");
  let addBtn = document.getElementById("add-btn");
  let showTaskList = document.getElementById("show-task-list");

  addBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let trimedInput = userInputTaskName.value.trim();
    if (trimedInput == "") {
      alert("Write your task");
      userInputTaskName.value = "";
      taskDate.value = "";
      taskTime.value = "";
    } else {
      taskItem(showTaskList, trimedInput, taskDate.value, taskTime.value);
      userInputTaskName.value = "";
      taskDate.value = "";
      taskTime.value = "";
    }
  });
};

function taskItem(parent, str, taskDate, taskTime) {
  let divItem = document.createElement("div");
  let innerDivOne = document.createElement("div");
  let innerDivTwo = document.createElement("div");
  let innerDivThree = document.createElement("div");
  let editBtn = document.createElement("span");
  let removeBtn = document.createElement("span");
  let title = document.createElement("p");
  let created = document.createElement("p");
  let finishTimeText = document.createElement("p");
  let taskDateTime = document.createElement("p");

  divItem.classList =
    "flex flex-row justify-space-between shadow-red-4 mt-2 mb-2";

  // Add class & innerHTML to title
  innerDivOne.classList = "flex flex-col flex-wrap p-2";
  title.innerHTML = `<p class="p-1">Task : <span class="font-medium">${str}</span></p>`;
  created.innerHTML = `<p class="p-1">${new Date().toLocaleDateString()}</p>`;

  // Add class & innerHTML to Finish time
  innerDivTwo.classList = "flex flex-col flex-wrap p-2";
  finishTimeText.innerHTML = `<p class="p-1">About to Finish</p>`;
  taskDateTime.innerHTML = `<p class="p-1">${taskDate} ${taskTime}</p>`;

  // Add class & innerHTML to edit & remove button
  innerDivThree.classList = `flex flex-row p-2`;
  editBtn.classList = "inline-flex p-1 cursor-pointer";
  removeBtn.classList = "inline-flex p-1 cursor-pointer";

  editBtn.innerHTML = `<img src="./images/edit.svg" alt="Edit" class="w-5 object-center" />`;
  removeBtn.innerHTML = `<img src="./images/trash-can-solid.svg" alt="Trash-can-solid" class="w-5 object-center" />`;

  editBtn.addEventListener("click", function () {
    let userInputTaskName = document.getElementById("user-input-task-name");
    if (userInputTaskName.value == "") {
      userInputTaskName.value = str;
      document.getElementById("user-input-task-date").value = taskDate;
      document.getElementById("user-input-task-time").value = taskTime;
      divItem.remove();
    }
  });

  removeBtn.addEventListener("click", function () {
    divItem.remove();
  });

  innerDivOne.append(title, created);
  innerDivTwo.append(finishTimeText, taskDateTime);
  innerDivThree.append(editBtn, removeBtn);
  divItem.append(innerDivOne, innerDivTwo, innerDivThree);
  parent.appendChild(divItem);
}
