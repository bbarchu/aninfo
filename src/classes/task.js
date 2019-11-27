//var Enum = require('enum');

class Task {
    
    constructor(name = "") {
        this.id = null;
        this.name_ = name;
        this.state_ = 0; //not started
        this.estimation_ = 0;
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

    get state(){
        return this.state_;
    }

    blockTask(){
        if(this.state_ == 1){
            this.state_ = 2;
        }        
    }

    resumeTask(){
        if(this.state_ == 2){
            this.state_ = 1;
        }   
    }

    startTask(){
        if(this.state_ == 0){
            this.state_ = 1;
        }
    }

    finishTask(){
        if(this.state_ == 1){
            this.state_ = 3;
        }
    }
}

//const State = new Enum(['not started', 'developing', 'blocked', 'finished']);
//export default Task;
exports.Task = Task;

