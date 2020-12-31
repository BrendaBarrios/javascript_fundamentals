var nombre = 'Brenda', apellido= 'Barrios'

// nombre en mayusculas
var nombreMayusculas = nombre.toUpperCase()
console.log(nombreMayusculas)


// nombre en minusculas
var nombreMinusculas = apellido.toLowerCase()
console.log(nombreMinusculas)


// Saber el primer caracter en la posición requiere cracter de la posición empieza en 0
// siempre respeta si es mayuscula o minuscula
var primeraLetraDelNombre = nombre.charAt(0)
console.log(primeraLetraDelNombre)


// Cantidad de letras es un atributo
var cantidadLetras = nombre.length
console.log(cantidadLetras)

// concatenación
var nombreCompleto = nombre + ' ' +apellido
console.log(nombreCompleto)

// interpolación dentro del parentesis va codigo javascript o variables
var nombres = ` ${nombre} ${apellido.toUpperCase()}` 
console.log(nombres)

// Aceder a un string más pequeño

var str = nombre.substr(1,2)
console.log(str)

// Desafio : Ultima letra del nombre

var ultimaLetra = nombre.substr(-1)
console.log(ultimaLetra)