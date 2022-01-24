class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    set profesion(p) {
        this._profesion = p;
    }
    get profesion() {
        return this._profesion;
    }
}
const pepe = new Persona("Pepe", 50);
pepe.profesion = "informatico";
console.log(pepe);
console.log(pepe.profesion);
