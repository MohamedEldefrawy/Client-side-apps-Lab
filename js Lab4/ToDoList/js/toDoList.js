var btnAddTask = document.getElementById("btnAddTask");
var txtTaskName = document.getElementById("txtTaskName");
var tasksSection = document.getElementById("Tasks");

var toDoList = {
    tasks: []
};

var task = {};


window.addEventListener('load', function () {
    getTasks();
});

function btnAddTaskClick() {
    var newTaskElement = `
        <div class="task">
            <div class="task-body"  data-name="` + txtTaskName.value + `">` + txtTaskName.value + `</div>
            <div class="task-controls">
                <a class="btn-done" onclick="btnDoneClicked(event)"><i class="fas fa-check"></i></a>
                <a class="btn-remove" onclick="btnDeleteClicked(event)"><i class="fas fa-trash-alt"></i></a>
            </div>
        </div>`;
    tasksSection.insertAdjacentHTML('beforeend', newTaskElement);
    saveToDoList(txtTaskName.value, false);
    txtTaskName.value = "";
}

function btnDoneClicked(event) {
    var task = event.currentTarget.closest('.task').firstElementChild;
    task.classList.toggle("finished-task");
    console.log(task)
    changeTaskStatus(task.innerHTML);
}

function btnDeleteClicked(event) {
    var task = event.currentTarget.closest('.task');
    tasksSection.removeChild(task);
    event.stopPropagation();
    removeFromToDoList(task.firstElementChild.innerHTML);
}

function saveToDoList(task, isCompleted) {
    var createTask = {
        taskName: task,
        isCompleted: isCompleted
    };
    toDoList.tasks.push(createTask);
    localStorage.toDoList = JSON.stringify(toDoList);
}

function removeFromToDoList(task) {
    var index = toDoList.tasks.findIndex(function (element) {
        return element.taskName === task;
    });

    toDoList.tasks.splice(index, 1);
    localStorage.toDoList = JSON.stringify(toDoList);
}

function getTasks() {

    if (localStorage.toDoList)
        var tasks = JSON.parse(localStorage.toDoList);

    toDoList.tasks = tasks.tasks;
    toDoList.tasks.forEach(function (task) {

        var taskCompletedClass = task.isCompleted ? `task-body finished-task` : `task-body`;
        console.log("task completion = " + taskCompletedClass);


        var taskElement = `
        <div class="task">
            <div  data-name="` + task.taskName + `" class = "` + taskCompletedClass + `">` + task.taskName + `</div>
            <div class="task-controls">
            <a class="btn-done" onclick="btnDoneClicked(event)"><i class="fas fa-check"></i></a>
            <a class="btn-remove" onclick="btnDeleteClicked(event)"><i class="fas fa-trash-alt"></i></a>
        </div>
    </div>
        `;
        tasksSection.insertAdjacentHTML('beforeend', taskElement);
    });
}

function changeTaskStatus(task) {
    var index = toDoList.tasks.findIndex(function (element) {
        return element.taskName == task;
    });
    var changeStatusFlag = toDoList.tasks[index].isCompleted
    toDoList.tasks[index].isCompleted = !changeStatusFlag;
    localStorage.toDoList = JSON.stringify(toDoList);
}

