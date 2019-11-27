class Developer {
    constructor(name = ""){
        this.name_ = name;
        this.assignedTask = null;
        this.hasAsiggnedTask = false;
    }

    set name(name) {
        this.name_ = name;
    }

    get name() {
        return this.name_;
    }

    assignTask(tarea){
        if(!this.hasAsiggnedTask){
            this.assignedTask = tarea;
            this.hasAsiggnedTask = true;
        }
    }

    startTask(tarea){
        tarea.startTask();
    }

    resumeTask(tarea){
        tarea.resumeTask();
    }

    finishTask(tarea){
        tarea.finishTask()
    }

    taskCount(){
        if(this.hasAsiggnedTask){
            return 1;
        }
        return 0;
    }

    blockTask(tarea){
        tarea.blockTask();
    }

    estimar(tarea,horas){
        tarea.estimation = horas;
    }
}

exports.Developer = Developer;
