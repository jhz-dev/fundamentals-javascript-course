const ALTURA_PROMEDIO = 1.80;

class Persona {

    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar (fn) {
        console.log(`Te saluda ${this.nombre} ${this.apellido}`);
        
        if (fn) {
            fn(this.nombre, false)
        }
    }

    soyAlto () {
        console.log(`Hola, soy ${this.nombre} ${this.apellido} y soy ${this.altura >= ALTURA_PROMEDIO ? 'alto' : 'bajo/a'}`);
    }
}

class Desarrollador extends Persona {

    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }

    saludar (fn) {
        console.log(`Te saluda ${this.nombre} ${this.apellido} que es desarrollador/a`);

        if (fn) {
            fn(this.nombre, true)
        }
    }
}

const responderSaludo = (nombre, esDev) => {
    console.log(`Buenas ${nombre} `);

    if (esDev) {
        console.log(`Que maravilla eres desarrollador/a`);
    }
}

var oscar = new Persona('Oscar', 'Perez', 1.75);
oscar.saludar(responderSaludo);

var oscar = new Desarrollador('Sara', 'Perez');
oscar.saludar(responderSaludo);