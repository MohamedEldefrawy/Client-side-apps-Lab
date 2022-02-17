class Task {
    task;

    constructor(task) {
        this.task = task;
    }
}

class ToDoList {
    toDoList;
    btnAddTask;
    txtTaskName;
    tasksSection;
    tasks;

    constructor() {
        this.txtTaskName = document.getElementById("txtTaskName");
        this.btnAddTask = document.getElementById("btnAddTask");
        this.tasksSection = document.getElementById("Tasks");
        // this.toDoList = ;
        this.toDoList = [];

        this.btnAddTask.addEventListener("click", (event) => {
            let newTaskElement = `
                <div class="task">
                    <div class="task-body"  data-name="${this.txtTaskName.value}"> ${this.txtTaskName.value} </div>
                    <div class="task-controls">
                        <a class="btn-done"><i class="fas fa-check"></i></a>
                        <a class="btn-remove"><i class="fas fa-trash-alt"></i></a>
                    </div>
                </div>`;
            this.tasksSection.insertAdjacentHTML('beforeend', newTaskElement);

            this.saveToDoList(new Task({
                taskName: this.txtTaskName.value,
                isCompleted: false
            }));
            this.txtTaskName.value = "";
        });

        this.tasksSection.addEventListener("click", event => {
            event.stopPropagation();
            let task = event.target.closest('.task');
            let selectedTask = {
                taskName: task.firstElementChild.innerHTML,
                isCompleted: task.lastElementChild.classList.contains('finished-task')
            }

            if (event.target.classList.contains('btn-done') || event.target.classList.contains('fa-check')) {
                task.classList.toggle("finished-task");
                this.changeTaskStatus(selectedTask);
            } else if (event.target.classList.contains('btn-remove') || event.target.classList.contains('fa-trash-alt')) {

                this.removeFromToDoList(selectedTask);
                this.tasksSection.removeChild(task);
            }
        });
    }

    saveToDoList(task) {
        this.toDoList.push(task);
        localStorage.toDoList = JSON.stringify(this.toDoList);
    }

    changeTaskStatus = task => {
        let index = this.toDoList.findIndex((element) => {
            return element.task.taskName === task.taskName;
        });

        console.log(index);
        this.toDoList[index].task.isCompleted = !this.toDoList[index].task.isCompleted;
        localStorage.toDoList = JSON.stringify(this.toDoList);
    };

    removeFromToDoList = task => {

        let index = this.toDoList.findIndex((element) => {
            return element.task.taskName === task.taskName;
        });

        this.toDoList.splice(index, 1);
        localStorage.toDoList = JSON.stringify(this.toDoList);
    };

    renderTasks = () => {
        if (localStorage.toDoList) {
            this.toDoList = JSON.parse(localStorage.toDoList);

            this.toDoList.forEach((task) => {
                let taskCompletedClass = task.task.isCompleted ? `task-body finished-task` : `task-body`;
                let taskElement = `
                <div class="task ${taskCompletedClass}">
                    <div  data-name="${task.task.taskName}">${task.task.taskName}</div>
                    <div class="task-controls">
                    <a class="btn-done"><i class="fas fa-check"></i></a>
                    <a class="btn-remove"><i class="fas fa-trash-alt"></i></a>
                </div>
            </div>`;
                this.tasksSection.insertAdjacentHTML('beforeend', taskElement);
            });
        }
    };

    getToDoList() {
        return this.toDoList;
    }
}

class ToDoListStarter {
    toDoList = new ToDoList();

    renderToDoList() {
        this.toDoList.getToDoList();
        this.toDoList.renderTasks();
    }
}

let startToDoList = new ToDoListStarter();
startToDoList.renderToDoList();



