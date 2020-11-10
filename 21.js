const ALTURA_PROMEDIO = 1.80;

function heredaDe(hijo, padre) {
    const noop = function () {};
    noop.prototype = padre.prototype;
    hijo.prototype = new noop();
    hijo.prototype.constructor = hijo;
} 

function Persona (nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;

    Persona.prototype.saludar = function () {
        console.log(`Te saluda ${this.nombre} ${this.apellido}`);
    }
    
    Persona.prototype.soyAlto = function () {
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y soy ${ this.altura >= ALTURA_PROMEDIO? 'alto' : 'bajo' }`);
    }
}

heredaDe(Desarrollador, Persona);

function Desarrollador (nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;

    Persona.prototype.saludar = function () {
        console.log(`Te saluda ${this.nombre} ${this.apellido} que es desarrollador/a`);
    }
}

var oscar = new Persona('Oscar', 'Perez', 1.75);
oscar.saludar();
oscar.soyAlto();

var oscar = new Desarrollador('Sara', 'Perez');
oscar.saludar();
oscar.soyAlto();