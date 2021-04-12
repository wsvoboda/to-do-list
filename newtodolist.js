const myHeading = document.querySelector(".welcome");
const changeUserButton = document.querySelector(".changeUser");
const form = document.querySelector("form");
const deleteButton = document.createElement("button");
const lowPriorityButton = document.getElementById("low");
const medPriorityButton = document.getElementById("medium");
const highPriorityButton = document.getElementById("high");
const lowPriorityList = document.querySelector(".low-priority-list");
const medPriorityList = document.querySelector(".medium-priority-list");
const highPriorityList = document.querySelector(".high-priority-list");

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

const addNewTask = () => {
  const taskHeaderHolder = document.querySelector(".taskList");
  taskHeaderHolder.innerHTML = "Your To Do List"; // adds header to newly made list
  deleteButton.innerHTML = "Delete Selected Task(s)";
  const tasksDiv = document.querySelector(".tasksDiv");
  tasksDiv.append(deleteButton); // adds delete button to newly made list
  lowPriorityList.innerHTML = "Low Priority Tasks"; // creates header for low priority list
  medPriorityList.innerHTML = "Medium Priority Tasks"; // creates header for medium priority list
  highPriorityList.innerHTML = "High Priority Tasks"; // creates header for high priority list
  const newlyAddedTask = document.createElement("li"); // creates list item for added task
  const checkboxes = document.createElement("input");
  checkboxes.type = "checkbox"; // adds checkbox to list item
  const newTaskPrompt = document.querySelector("#text-box");
  newlyAddedTask.innerHTML = newTaskPrompt.value;
  newlyAddedTask.prepend(checkboxes);
  if (lowPriorityButton.checked) {
    lowPriorityList.append(newlyAddedTask);
  }
  if (medPriorityButton.checked) {
    medPriorityList.append(newlyAddedTask);
  }
  if (highPriorityButton.checked) {
    highPriorityList.append(newlyAddedTask);
  }
  document.getElementById("text-box").value = "";
};
//

const deleteTask = () => {
  // if checkbox is checked - remove list item
  // else do nothing
};

// calls function to add task when button is clicked
form.addEventListener("submit", (event) => {
  addNewTask();
  event.preventDefault();
});
//

// calls function to change user when button is clicked
changeUserButton.addEventListener("click", setUserName);
//

// calls function to delete tasks when button is clicked
// deleteButton.addEventListener("click", deleteTask);
//
