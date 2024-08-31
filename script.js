document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('removeTaskBtn').addEventListener('click', removeLastTask);

let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        tasks.push(taskText);
        updateTaskList();
        taskInput.value = '';
    }
}

function removeLastTask() {
    tasks.pop();
    updateTaskList();
}

function updateTaskList() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${task}`;
        taskList.appendChild(listItem);
    });
}
