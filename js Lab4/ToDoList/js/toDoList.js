var btnAddTask = document.getElementById("btnAddTask");
var txtTaskName = document.getElementById("txtTaskName");

var tasksSection = document.getElementById("Tasks");

function btnAddTaskClick() {
    var newTaskElement = `
        <div class="task">
            <div id="x" class="task-body">` + txtTaskName.value + `</div>
            <div class="task-controls">
                <a class="btn-done" onclick="btnDoneClicked(event)"><i class="fas fa-check"></i></a>
                <a class="btn-remove" onclick="btnDeleteClicked(event)"><i class="fas fa-trash-alt"></i></a>
            </div>
        </div>`;

    tasksSection.insertAdjacentHTML('beforeend', newTaskElement);
    txtTaskName.value = "";
}

function btnDoneClicked(event) {
    // console.log(event.currentTarget.closest('.task-name')
    var task = event.currentTarget.closest('.task').firstElementChild;
    task.classList.toggle("finished-task");
}

function btnDeleteClicked(event) {
    var task = event.currentTarget.closest('.task');
    tasksSection.removeChild(task);
    event.stopPropagation();
}