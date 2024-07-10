// Selectors
const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Event listener for form submission
todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const taskText = taskInput.value.trim(); // Get input value and trim whitespace

    if (taskText !== '') {
        addTask(taskText); // Add task to the list
        taskInput.value = ''; // Clear input field
    }
});

// Function to add a new task to the list
function addTask(taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(li);

    // Event listener for complete button
    const completeBtn = li.querySelector('.complete-btn');
    completeBtn.addEventListener('click', function() {
        li.classList.toggle('complete'); // Toggle strikethrough style
    });

    // Event listener for delete button
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        li.remove(); // Remove task from the list
    });
}
