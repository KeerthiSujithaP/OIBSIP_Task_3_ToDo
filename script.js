// Get HTML elements
const taskInput = document.getElementById('task');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const completedList = document.getElementById('completed-list');

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
        li.addEventListener('click', completeTask);
    }
}

// Mark task as completed function
function completeTask() {
    this.classList.add('completed');
    this.removeEventListener('click', completeTask);
    completedList.appendChild(this);
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
