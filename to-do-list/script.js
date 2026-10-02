// Select HTML elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Add task when button is clicked
addBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    const li = document.createElement("li");

    // Add task text
    li.textContent = taskText;

    // Create delete button
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    // Delete task
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // Mark task as completed
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    // Add delete button to list item
    li.appendChild(deleteBtn);

    // Add task to the list
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
});