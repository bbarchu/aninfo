//var Enum = require('enum');

class Task {
    
    constructor(name = "") {
        this.id = null;
        this.name_ = name;
        this.state = 0; //not started
        this.estimation_ = 0;
        this.developer_ = null;
    }

    set name(name) {
        this.name_ = name;
    }
    get name() {
        return this.name_;
    }

    set estimation(horas = 0){
        this.estimation_ = horas;
    }

    get estimation(){
        return this.estimation_;
    }

    set developer(developerName){
        this.developer_ = developerName;
    }

    get developer(){
        return this.developer;
    }

    blockTask(){
        if(this.state == 1){
            this.state = 2;
        }        
    }

    resumeTask(){
        if(this.state == 2){
            this.state = 1;
        }   
    }

    startTask(){
        if(this.state == 0){
            this.state = 1;
        }
    }

    finishTask(){
        if(this.state == 1){
            this.state = 3;
        }
    }
}

// const State = new Enum(['not started', 'developing', 'blocked', 'finished']);
//export default Task;
exports.Task = Task;
