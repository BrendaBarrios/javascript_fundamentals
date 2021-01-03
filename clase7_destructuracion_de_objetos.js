
var brenda = {
    nombre: 'Yasmin',
    edad: 22,
    apellido : 'Barrios'
}

var saul = {
    nombre: 'Saul',
    edad: 20,
    apellido : 'Sanchez'
}


function imprimirNombreMayusculas(persona){
   // En lugar de colocarlo asi var nombre = persona.nombre se puede poner asi y hace lo mismo :
   var {nombre} = persona
   console.log(nombre.toUpperCase())
}

function imprimirNombreYEdad(persona){
    // salida : Hola, me llamo Brenda y tengo 22 años por cada objeto.
    var {nombre, edad} = persona
    console.log(` Hola , me llamo ${nombre} y tengo ${edad} años`)
} 

imprimirNombreMayusculas(brenda)
imprimirNombreYEdad(brenda)
imprimirNombreYEdad(saul) 