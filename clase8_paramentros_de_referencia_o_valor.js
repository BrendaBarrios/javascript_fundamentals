
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



// El objeto se ve modificado despues de llamar ala función este es parametro como referencia
// Los objetos que se pasan por parametro se pasan por referencia es decir si se modifica el valor
// dentro de la funcion el cambio se ve reflejado fuera de la función
function cumpleanos(persona){
    persona.edad += 1 // el cambio se ve fuera de la funcion aparece cuando se llama ala funcion primero

}

// Devuelve un nuevo objeto de persona pero con el campo edad modificado un año más que el objeto anterior
function cumpleanosDevolviendoObjeto(persona){
    return {
        ...persona, // Quiere decir que copia todo el objeto persona
        edad : persona.edad + 1 // pero que sobreescribe el valor de edad.
    }
}

brendaMasEdad = cumpleanosDevolviendoObjeto(brenda)
console.log(brendaMasEdad)
console.log(brenda) // pero tambien se tiene al de brenda actual de 22 años




