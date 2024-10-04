function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');
    let li = document.createElement('li');
    li.textContent = taskInput.value;

    li.onclick = function() { updateTask(li); };
    
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() { taskList.removeChild(li); };
    
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
}

function updateTask(li) {
    var newTask = prompt('Update your task:', li.firstChild.textContent);
    if (newTask) { li.firstChild.textContent = newTask; }
}

