var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decoradores de clase
var Electrico = function (constructorFunction) {
    constructorFunction.prototype.electrico = true;
};
var Coche = /** @class */ (function () {
    function Coche(fabricante) {
        this._fabricante = fabricante;
    }
    Coche = __decorate([
        Electrico
    ], Coche);
    return Coche;
}());
var mercedes = new Coche("Mercedes");
console.log("electrico", mercedes["electrico"]);
console.log(mercedes);
// decorator factory
var AddGasolina = function (gas) {
    return function (constFunc) {
        constFunc.prototype.gas = gas;
    };
};
var Coche2 = /** @class */ (function () {
    function Coche2(fabricante) {
        this._fabricante = fabricante;
    }
    Coche2 = __decorate([
        AddGasolina(20)
    ], Coche2);
    return Coche2;
}());
var nissan = new Coche2("Nissan");
console.log(nissan, nissan['gas']);
// Decorador de  propiedad
var printProperty = function (target, memberName) {
    console.log(memberName, target);
};
var Min = function (limit) {
    return function (target, propertyKey) {
        var value;
        var getter = function () {
            return value;
        };
        var setter = function (newValue) {
            if (newValue.length < limit) {
                throw new Error("Bad value, the min is " + limit);
            }
            else {
                value = newValue;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
};
var Usuario = /** @class */ (function () {
    function Usuario() {
        this.name = "Alfonso";
    }
    __decorate([
        printProperty
    ], Usuario.prototype, "name");
    __decorate([
        Min(8)
    ], Usuario.prototype, "password");
    return Usuario;
}());
var alfonso = new Usuario();
// alfonso.password="kdsj"
alfonso.password = "kdsjsdsdfd";
console.log(alfonso.password);
