// Get references to the DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to create and display a new task
function addTask() {
    const taskText = taskInput.value.trim();
    
    // Make sure task isn't empty
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
        li.remove();  // Remove the task when the button is clicked
    });

    // Append the button to the list item
    li.appendChild(removeBtn);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Optionally, allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
