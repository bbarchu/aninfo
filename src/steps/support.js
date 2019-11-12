const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');


defineSupportCode(function({Given,Then,When}){
    let answer = 0;
    Given('I am a employee logged in the system and i have {int} tickets',
        function (input){
            answer= input;
        });
    
    When('I go to the help desk page and add {int} ticket',
        function(input){
            answer= answer + input;
        });
    
    Then('I should see the help desk page meaning that it went ok with {int} ticket',
        function(input){
            assert.equal(answer, input); 
        });

});

