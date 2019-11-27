var Project = require('../classes/project').Project;
var Developer = require('../classes/developer').Developer;


//import { Project } from '../classes/project';
const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');


defineSupportCode(function({Given,Then,When}){
    let project = new Project();
    let tareasProyecto = 0;
    Given('que soy un desarrollador logueado en el sistema y el proyecto tiene 0 tareas',
        function(){
            tareasProyecto = project.countTask();
        }
    );
    When('voy a la pagina de proyecto y agrego 1 tarea',
        function(){
            tarea = project.createNewTask();
        }
    );
    Then('deberia ver la pagina del proyecto con {int} tarea',
        function(input){
            tareasProyecto = project.countTask();
            assert.equal(tareasProyecto, input);
        }
    );
});

defineSupportCode(function({Given,Then,When}){
    let project = new Project();
    let tarea = project.createNewTask();
    let desarrollador = new Developer();
    
    Given('que soy un desarrolador logueado en el sistema y tengo 0 tareas asignadas',
        function(){
        }
    );
    When('voy a la pagina de proyecto y me asigno 1 tarea ya creada',
        function(){
            desarrollador.assignTask(tarea);
        }
    );
    Then('deberia tener asignada {int} tarea',
        function(input){
            
            assert.equal(desarrollador.taskCount(), input);
        }
    );
});

defineSupportCode(function({Given,Then,When}){
    let project = new Project();
    tarea = project.createNewTask();
    let desarrollador = new Developer();
    
    Given('que soy un desarrolador logueado en el sistema y tengo 1 tarea asignada iniciada',
        function(){
            desarrollador.assignTask(tarea);
            desarrollador.startTask(tarea);
        }
    );
    When('voy a la pagina de proyecto y pauso 1 tarea asignada a mi',
        function(){
            desarrollador.blockTask(tarea);
        }
    );
    Then('la tarea deberia estar pausada',
        function(){
            let pausada = 2;
            assert.equal(tarea.state, pausada);
        }
    );
});

defineSupportCode(function({Given,Then,When}){
    let project = new Project();
    tarea = project.createNewTask();
    let desarrollador = new Developer();
    
    Given('que soy un desarrolador logueado en el sistema y tengo 1 tarea asignada no iniciada',
        function(){
            desarrollador.assignTask(tarea);
        }
    );
    When('voy a la pagina de proyecto e inicio 1 tarea asignada a mi',
        function(){
            desarrollador.startTask(tarea);
        }
    );
    Then('la tarea deberia estar iniciada',
        function(){
            let iniciada = 1;
            assert.equal(tarea.state, iniciada);
        }
    );
});

defineSupportCode(function({Given,Then,When}){
    let project = new Project();
    tarea = project.createNewTask();
    let desarrollador = new Developer();
    
    Given('que soy un desarrolador logueado en el sistema y tengo 1 tarea asignada pausada',
        function(){
            desarrollador.assignTask(tarea);
            desarrollador.startTask(tarea);
            desarrollador.blockTask(tarea);
        }
    );
    When('voy a la pagina de proyecto y resumo 1 tarea asignada a mi',
        function(){
            desarrollador.resumeTask(tarea);
        }
    );
    Then('la tarea deberia estar resumida',
        function(){
            let developing = 1;
            assert.equal(tarea.state, developing);
        }
    );
});

defineSupportCode(function({Given,Then,When}){
    let project = new Project();
    tarea = project.createNewTask();
    let desarrollador = new Developer();
    
    Given('que soy un desarrolador logueado en el sistema y tengo 1 tarea asignada en desarrollo',
        function(){
            desarrollador.assignTask(tarea);
            desarrollador.startTask(tarea);
        }
    );
    When('voy a la pagina de proyecto y finalizo 1 tarea asignada a mi',
        function(){
            desarrollador.finishTask(tarea);
        }
    );
    Then('la tarea deberia estar finalizada',
        function(){
            let finished = 3;
            assert.equal(tarea.state, finished);
        }
    );
});

defineSupportCode(function({Given,Then,When}){
    let project = new Project();
    tarea = project.createNewTask();
    let desarrollador = new Developer();
    
    Given('que soy un desarrollador logueado en el sistema y tengo una tarea asignada',
        function(){
            desarrollador.assignTask(tarea);
        }
    );
    When('voy a la pagina de proyecto y la estimo con {int} horas',
        function(input){
            desarrollador.estimar(tarea,input);
        }
    );
    Then('la tarea deberia tener asignada una estimacion de {int} horas',
        function(input){
            let finished = 3;
            assert.equal(tarea.estimation, input);
        }
    );
});
