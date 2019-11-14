var Enum = require('enum');

class Task {
    
    constructor(name = "") {
        this.id = null;
        this.name_ = name;
        this.state = 0; //not started
        this.estimation = 0;
        this.developer = null;
    }

    set name(name) {
        this.name_ = name;
    }
    get name() {
        return this.name_;
    }

    set estimation(horas){
        this.estimation = horas;
    }

    get estimation(){
        return this.estimation;
    }

    set developer(developerName){
        this.developer = developerName;
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
