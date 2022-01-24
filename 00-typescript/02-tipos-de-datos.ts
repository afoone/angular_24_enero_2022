// String
let s: string
s = "hola mundo"
console.log(typeof(s), s)

// inferencia de tipos
const inferido = "infiero el tipo string"
console.log(typeof(inferido), inferido)

// number
const numero: number = 0

// boleano
const boleano: boolean = true

// cualquier tipo
const cualquiera: any = ["kdsjafl", 348]

// Arrays
const arr: Array<string> = []
// const arr: string[];
// arr.push(2)
arr.push("nuevo elemento")
console.log(arr)

const arr2: any[] = []
arr2.push(2)
arr2.push("nuevo elemento")
console.log(arr2)

// multiples tipos
let multiple: string | number
multiple = "4"
multiple = 4
//multiple = false 




