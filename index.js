console.log('Hola Konhin') // Esto es un saludo
/**
 * Este es un comentario
 * 
 * de 
 * 
 * Bloque
 */

// Variable son contenedores que permiten almacenar datos

// ES5
// Ya no usamos este tipo de variable
var primeraVariable = "Hola"

// ES6
// Declarar una variable con datos mutables
let saludo
saludo = 'Hello, How are you?'
console.log(saludo)

// Declaracion de una variable con datos no mutables
const greeting = 'hola'
console.log(greeting)

// Siempre usar constantes a menos que el contexto diga lo contratio.
//  El formato para nombrar variables camelCase

let myNameIs = 'Konhin'
console.log(typeof myNameIs)

/**
 * Tipos de Datos
 */

// A. String
let comida = 'Tacos'
let perro = "Pluto"
const pais = "Mexico"
// B. Number 
let precio = 15
let impuestos = 16.99

// Concatenacion 
let ejemplo1 = 15 + 50 // => 65
let ejemplo2 = 50 + '30' // => 5030
let ejemplo3 = 'konhin' + 25 // => konhin25
let ejemplo4 = 'Hola mi nombre es: ' + myNameIs

console.log(ejemplo1)
console.log(ejemplo2)
console.log(ejemplo3)

// Interpolación (ES6+)
let ejemploDeInterpolacion = `hola mundo mi edad es ${10 + 14}`
console.log(ejemploDeInterpolacion)

let ejemploDeInterpolacion2 = `hola mi nombre es: ${myNameIs}`

let ejemploDeInterpolacion3 = `
    ¿Como va todo?
`
console.log(ejemploDeInterpolacion2)

        // NaN
        let ejemplo5 = 'konhin' / 4 // NaN => Not a number 

    // Operadores
    console.log(2 + 2)
    console.log(4 - 2)
    console.log(3 * 2)
    console.log(6 / 2)

    console.log(2 ** 5) // Exponencial
    console.log (7 % 2)
console.log('50' * 30) // si multiplicas un string por un número obtienes un tipo de dato number 

let myAge = 24
myAge += 1

myAge -= 1

myAge *= 2

myAge /= 2
console.log(myAge)

// C. Boolean

// D. Array

// E. Object
