// Polimorfismo con interfaces

interface VozAnimal {
  hablar(): string;
}

class Perro implements VozAnimal {
  hablar(): string {
    return "Guau Guau";
  }
}

class Gato implements VozAnimal {
  hablar(): string {
    return "Miau Miau";
  }
}

// const mascotas: Array<VozAnimal> = []
const mascotas: Array<Gato | Perro> = [];

mascotas.push(new Gato());
mascotas.push(new Perro());

mascotas.forEach((m) => console.log(m.hablar()));

// Interfaces para definición de tipos
interface GPS {
  lat: number;
  long: number;
  label?: string;
  // go?: (myposition: GPS)=>{}
  go?: Function;
}

const position: GPS = {
  lat: 32,
  long: 34,
};

console.log(position)
