//var Ticket = require('../classes/ticket').Ticket;
var MesaAyuda = require('../classes/mesaAyuda').MesaAyuda;

const defineSupportCode = require('cucumber').defineSupportCode;
const assert = require('assert');


defineSupportCode(function({Given,Then,When}){
    let mesa = new MesaAyuda();
    let tickets;
    Given('Soy un empleado logueado en el sistema y la mesa de ayuda tiene {int} tickets',
        function (input){
            tickets = mesa.ticketsCreados;
        });    
    When('Voy hasta la mesa de ayuda y agrego {int} ticket',
        function(input){
            mesa.crearTicket();        
        });    
    Then('Deberia ver la mesa de ayuda con {int} ticket creado exitosamente',
        function(input){
            assert.equal(mesa.ticketsCreados, input); 
        });
});

defineSupportCode(function({Given,Then,When}){
    let mesa = new MesaAyuda();
    let ticket;
    Given('Que soy un empleado logueado en el sistema',
        function (){
            tickets = mesa.ticketsCreados;
        });    
    When('Voy a la mesa de ayuda, creo 1 ticket y lo inicio',
        function(){
            ticket = mesa.crearTicket();
            mesa.iniciarTicket(ticket);
        });    
    Then('Deberia estar iniciado el ticket',
        function(){
            let iniciado = 1;
            assert.equal(ticket.state, iniciado); 
        });
});

defineSupportCode(function({Given,Then,When}){
    let mesa = new MesaAyuda();
    let ticket;
    Given('que soy un empleado logueado en el sistema y hay un ticket iniciado',
        function (){
            ticket = mesa.crearTicket();
            mesa.iniciarTicket(ticket);
        });    
    When('voy a la mesa de ayuda, finalizo un ticket ya iniciado',
        function(){
            mesa.finalizarTicket(ticket);            
        });    
    Then('el ticket deberia estar finalizado',
        function(){
            let finalizado= 2;
            assert.equal(ticket.state, finalizado); 
        });
});


