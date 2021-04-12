const myHeading = document.querySelector(".welcome");
const changeUserButton = document.querySelector(".changeUser");
const deleteButton = document.createElement("button");
const lowPriorityButton = document.querySelector("#low");
const medPriorityButton = document.querySelector("#medium");
const highPriorityButton = document.querySelector("#high");
const lowPriorityList = document.querySelector(".low-priority-list");
const mediumPriorityList = document.querySelector(".medium-priority-list");
const highPriorityList = document.querySelector(".high-priority-list");
const newTaskPrompt = document.querySelector("#text-box");
const submitButton = document.querySelector("#submitButton");
const lowPriorityHeader = document.querySelector(".low-header");
const medPriorityHeader = document.querySelector(".medium-header");
const highPriorityHeader = document.querySelector(".high-header");

const setUserName = () => {
  let myName = prompt("What is your name?");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to Your To Do List, ${myName}!`;
  }
};

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Welcome to Your To Do List, " + storedName + "!";
}

// const deleteTask = () => {
//   // if checkbox is checked - remove list item
//   // else do nothing
// };

// calls function to change user when button is clicked
changeUserButton.addEventListener("click", setUserName);
//

// calls function to delete tasks when button is clicked
// deleteButton.addEventListener("click", deleteTask);
//

// takes tasks and adds them to a list
function addNewTask() {
  const taskHeaderHolder = document.querySelector(".taskList");
  taskHeaderHolder.innerHTML = "Your To Do List";
  deleteButton.innerHTML = "Delete Selected Task(s)";
  const tasksDiv = document.querySelector(".tasksDiv");
  tasksDiv.append(deleteButton);
  lowPriorityHeader.innerHTML = "Low Priority Tasks";
  medPriorityHeader.innerHTML = "Medium Priority Tasks";
  highPriorityHeader.innerHTML = "High Priority Tasks";
  const newlyAddedTask = document.createElement("li");
  const checkboxes = document.createElement("input");
  checkboxes.type = "checkbox";
  newlyAddedTask.innerHTML = newTaskPrompt.value;
  newlyAddedTask.prepend(checkboxes);
  if (lowPriorityButton.checked) {
    lowPriorityList.append(newlyAddedTask);
  }
  if (medPriorityButton.checked) {
    mediumPriorityList.append(newlyAddedTask);
  }
  if (highPriorityButton.checked) {
    highPriorityList.append(newlyAddedTask);
  }
  document.getElementById("text-box").value = "";
}
//

// calls function to add task when button is clicked
submitButton.addEventListener("click", addNewTask);
//
