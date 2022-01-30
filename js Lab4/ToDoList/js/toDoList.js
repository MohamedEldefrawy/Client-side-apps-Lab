var btnAddTask = document.getElementById("btnAddTask");
var txtTaskName = document.getElementById("txtTaskName");
// var btnsDone = document.getElementsByName("btnDone");
// var btnRemove = document.getElementsByName("btnRemove");

var tasksSection = document.getElementById("Tasks");

function btnAddTaskClick() {
    var newTaskElement = `
        <div class="task">
            <div class="task-body">` + txtTaskName.value + `</div>
            <div class="task-controls">
                <a class="btn-done"><i class="fas fa-check"></i></a>
                <a class="btn-remove"><i class="fas fa-trash-alt"></i></a>
            </div>
        </div>`;

    tasksSection.insertAdjacentHTML('beforeend', newTaskElement);
    txtTaskName.value = "";
}

function btnDoneClicked()
{
    d
}