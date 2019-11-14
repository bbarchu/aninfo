var Task = require('../classes/task').Task;

class Project {
    constructor(name = ""){
        this.name_ = name;
        this.assignedHours_ = 0;
        this.tasks = [];
    }

    set name(name) {
        this.name_ = name;
    }
    get name() {
        return this.name_;
    }

    set horasAsignadas(horas){
        this.assignedHours_ = horas;
    }

    get horasAsignadas(){
        return this.assignedHours_
    }

    createNewTask(){
        let tarea = new Task();
        this.tasks.push(tarea);
        return tarea;
    }

    countTask(){
        return this.tasks.length;
    }

}

exports.Project = Project;
