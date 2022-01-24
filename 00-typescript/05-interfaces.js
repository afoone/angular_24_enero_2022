// Polimorfismo con interfaces
var Perro = /** @class */ (function () {
    function Perro() {
    }
    Perro.prototype.hablar = function () {
        return "Guau Guau";
    };
    return Perro;
}());
var Gato = /** @class */ (function () {
    function Gato() {
    }
    Gato.prototype.hablar = function () {
        return "Miau Miau";
    };
    return Gato;
}());
// const mascotas: Array<VozAnimal> = []
var mascotas = [];
mascotas.push(new Gato());
mascotas.push(new Perro());
mascotas.forEach(function (m) { return console.log(m.hablar()); });
