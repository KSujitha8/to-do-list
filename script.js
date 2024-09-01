// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const addTaskButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        const li = document.createElement('li');
        li.className = 'task';

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        li.appendChild(taskContent);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-btn';
        deleteButton.textContent = '×';
        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = '';
    }

    // Add task when button is clicked
    addTaskButton.addEventListener('click', addTask);

    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

