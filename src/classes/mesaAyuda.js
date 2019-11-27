var Ticket = require('./ticket').Ticket;

class MesaAyuda {
    constructor(name = ""){
        this.name_ = name;
        this.ticketsCreados_ = 0;
        this.ticketsFinalizados_ = 0;
    }

    get ticketsCreados(){
        return this.ticketsCreados_;
    }

    crearTicket() {
        this.ticketsCreados_ ++;
        return new Ticket();
    }

    establecerTipo(ticket, tipo){
        ticket.tipo = tipo;
    }

    establecerSeveridad(ticket, severidad) {
        ticket.severidad = severidad;
    }

    establecerProducto(ticket, producto) {
        ticket.producto = producto;
    }

    establecerVersion_producto(ticket, version_producto) {
        ticket.version_producto = version_producto;
    }

    iniciarTicket(ticket){
        ticket.iniciar();  
    }

    finalizarTicket(ticket){
        ticket.finalizar(); 
    }
}

exports.MesaAyuda = MesaAyuda;
