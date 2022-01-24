class Persona {
    
    public nombre: string
    public edad: number
    private _profesion: string

    constructor(nombre: string, edad:number) {
        this.nombre = nombre
        this.edad = edad
    }

    public set profesion(p:string) {
        this._profesion = p
    }

    public get profesion(): string {
        return this._profesion
    }
}

const pepe = new Persona("Pepe", 50)
pepe.profesion = "informatico"
console.log(pepe)
console.log(pepe.profesion)

