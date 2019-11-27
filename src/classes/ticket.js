//var Enum = require('enum');

class Ticket {
    
    constructor(name = "") {
        this.id = null;
        this.name_ = name;
        this.tipo_ = 0; //not started
        this.severidad_ = 0;
        this.producto_ = null;
        this.version_producto = 0;
        this.state_ = 0;
    }

    set name(name) {
        this.name_ = name;
    }
    get name() {
        return this.name_;
    }

    set tipo(tipo){
        this.tipo_ = tipo;
    }

    get tipo(){
        return this.state_;
    }

    set severidad(severidad) {
        this.severidad_ = severidad;
    }
    get severidad() {
        return this.severidad_;
    }

    set producto(producto) {
        this.producto_ = producto;
    }
    get producto() {
        return this.producto_;
    }

    set version_producto(version_producto) {
        this.version_producto_ = version_producto;
    }
    get version_producto() {
        return this.version_producto_;
    }

    get state() {
        return this.state_;
    }

    iniciar(){
        if(this.state_ == 0){
            this.state_=1;
        }
            
    }

    finalizar(){
        if(this.state_ == 1){
            this.state_=2;
        }
    }
}

//const Tipo = new Enum(['incidente','consulta']);
//const State = new Enum([no iniciado,'en desarrollo','finalizado']);

//export default Task;
exports.Ticket = Ticket;

