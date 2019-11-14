var Project = require('../classes/project').Project;

//import { Project } from '../classes/project';
const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');


defineSupportCode(function({Given,Then,When}){
    let project = new Project();
    let ticketsTotal = 0;
    Given('I am a developer logged in the system and I have {int} assigned task',
        function(input){
            ticketsTotal = project.countTask();
        }
    );
    When('I go to the project page and added {int} project task',
        function(input){
            tarea = project.createNewTask();
        }
    );
    Then('I should see the project page meaning that it went ok with plus {int} ticket',
        function(input){
            ticketsTotal = project.countTask();
            assert.equal(ticketsTotal, input);
        }
    );
});