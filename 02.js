/**
 * Métodos de Strings
 */
// Acceder a caracteres
// A traves de la posición del string
// Recordar que inician en posición cero

const frase = 'Hola'

// 1- .charAt()
console.log(frase.charAt(0))
console.log(frase.charAt(1))
console.log(frase.charAt(2))
console.log(frase.charAt(3))

// 2- Acceder por bracket notation (NO ES METODO)
console.log(frase[0])
console.log(frase[1])
console.log(frase[2])
console.log(frase[3])

// 3- .indexOf("x")
const message = "Don't be sad, be happy!"

console.log(message.indexOf("Don't"))
console.log(message.indexOf("t"))
console.log(message.indexOf("Be")) // => -1 - Significa que no encontro la subcadena

// .lastIndexOf("")
console.log(message.lastIndexOf("be"))
console.log("buscando n'", message.lastIndexOf("n'"))

// 4- .repeat(x)
console.log(message.repeat(2))
console.log('$'.repeat(5)) // NOTA: Se puede usar la variable o una cadena y despues aplicarle el método

// SUBSTRING
const message2 = "Don't be sad, be happy!"

// 5- .substring(posInicio, posFinal)
// Acepta valores negativos, no necesitas valor final
// Los negativos van de deracha a izquierda
console.log(message2.substr(0, 3)) // => Don

// 6- .slice()
// acepta negativos pero siempre va de izquierda a derecha

console.log(message2.slice(0, 3))


// 7- Local Comapare (-1, 0, 1)

// -1 si el str1 es menor en posicion alfabetica (orden) que el str2
console.log('Hidalgo'.localeCompare('Zacatecas'))

// Es 1 Si str1 es mayor en posicion alfabetica(orden) al str2
console.log('Zacatecas'.localeCompare('Hidalgo'))

// Es 1 si el str1 es mayor en posicion alfabetica (orden) al str2
console.log('Hidalgo'.localeCompare('hidalgo'))

// Es 0 si son iguales
console.log('hidalgo'.localeCompare('hidalgo'))

// 8- Stars with
const str = "To be, or not to be, that is the question."

console.log(str.startsWith('question'))// False
console.log(str.startsWith("To be")) // True 
console.log(str.startsWith("not to be", 10)) // True
// Nota: puedes pasarle un segundo argumento para comparar posiciones específicas

// 9- End with
console.log(str.endsWith("question.")) // True
console.log(str.endsWith("to be")) // False
console.log(str.endsWith("To be", 1)) // False
// Nota: puedes pasarle un segundo argumento para comparar posiciones específicas

// 10- .includes
console.log(str.includes("to be")) // True
console.log(str.includes("question")) // True
console.log(str.includes("Mary")) // False
// Nota: puedes pasarle un segundo argumento para comparar posiciones específicas
console.log(str.includes("To be", 1)) //False