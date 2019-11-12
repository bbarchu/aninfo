const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');


defineSupportCode(function({Given,Then,When}){
    let ticketsEmployee = 0;
    let ticketsTotal = 0;
    Given('1 I am a employee logged in the system and i have {int} tickets',
        function (input){
            ticketsEmployee= input;
        });    
    When('1 I go to the help desk page and add {int} ticket',
        function(input){
            if(ticketsEmployee < 3){
                ticketsEmployee= ticketsEmployee + input;
                ticketsTotal+=input
            }
            
        });    
    Then('I should see the help desk page meaning that it went ok with plus {int} ticket',
        function(input){
            assert.equal(ticketsTotal, input); 
        });
});

defineSupportCode(function({Given,Then,When}){
    let ticketsEmployee = 0;
    let ticketsTotal = 0;
    Given('2 I am a employee logged in the system and i have {int} tickets',
        function (input){
            ticketsEmployee = input;
        });    
    When('2 I go to the help desk page and add {int} ticket',
        function(input){
            if(ticketsEmployee < 3){
                ticketsEmployee= ticketsEmployee + input;
                ticketsTotal+=input
            }
        });    
    Then('I should see the msg error and the tickets created are the same',
        function(){
            assert.equal(ticketsTotal, 0); 
        });
});



