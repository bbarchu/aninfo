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
}