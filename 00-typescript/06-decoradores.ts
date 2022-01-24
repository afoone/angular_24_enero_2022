// Decoradores de clase
const Electrico = (constructorFunction: Function) => {
    constructorFunction.prototype.electrico = true
}

@Electrico
class Coche {
    private _fabricante: string
    constructor(fabricante) {
        this._fabricante = fabricante
    }
}

const mercedes = new Coche("Mercedes")
console.log("electrico", mercedes["electrico"])

console.log(mercedes)

// decorator factory

const AddGasolina = (gas: number):ClassDecorator => {
    return (constFunc : Function) => {
        constFunc.prototype.gas = gas
    }
}

@AddGasolina(20)
class Coche2 {
    private _fabricante: string
    constructor(fabricante) {
        this._fabricante = fabricante
    }
}

const nissan = new Coche2("Nissan")
console.log(nissan, nissan['gas'])


// Decorador de  propiedad

const printProperty = (
    target: any,
    memberName: string,
) => {
    console.log(memberName, target)
}


const Min = (limit : number): PropertyDecorator  => {
    return function(target: Object, propertyKey: string) {
        let value: string;
        
        const getter = ():string => {
            return value;
        }

        const setter = (newValue: string) => {
            if (newValue.length < limit) {
                throw new Error("Bad value, the min is "+  limit);
            } else {
                value = newValue
            }
        }

        Object.defineProperty(
            target,
            propertyKey,
            {
                get: getter,
                set: setter
            }
        )
    }
}  

class Usuario {
    @printProperty
    name: string = "Alfonso"
    @Min(8)
    password: string
}

const alfonso = new Usuario()
// alfonso.password="kdsj"

alfonso.password="kdsjsdsdfd"
console.log(alfonso.password)


