// Polimorfismo con interfaces

interface VozAnimal {
    hablar(): string
}

class Perro implements VozAnimal {
    hablar(): string {
        return "Guau Guau"
    }
}

class Gato implements VozAnimal {
    hablar(): string {
        return "Miau Miau"
    }
}

// const mascotas: Array<VozAnimal> = []
const mascotas: Array<Gato | Perro> = []

mascotas.push(new Gato())
mascotas.push(new Perro())

mascotas.forEach( 
    m => console.log(m.hablar())
)