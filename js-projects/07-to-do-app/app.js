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

  editBtn.innerText = "Edit";
  removeBtn.innerText = "Remove";
  title.innerText = `Task: ${str}`;
  created.innerText = `created at: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
  finishTimeText.innerText = `About to finish at :`;
  taskDateTime.innerText = `${taskDate} ${taskTime}`;

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
