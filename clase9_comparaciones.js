var x = 4, y = '4' // Asignacións

x == y // Comparación : Regresa true porque ambos son 4 

x === y // Comparar tipo de variable y valor : Regresa false

// Es recomendable usar en la medida de lo posible el === es una buena practicas


var brenda = {
    nombre: 'brenda',
    edad : 22 ,
    apellido : 'Barrios'
}


var otraPersona = {
    nombre: 'brenda',
    edad : 25 ,
    apellido : 'Barrios'
}


// Con objetos en javascript el == y el === pregunta por la referencia a la variable por lo tanto siempre dara false
brenda == otraPersona
brenda === otraPersona


// Ejemplo de referencia en la musma variable
// Para comparar objetos se hace por medio de la referencia 
var personaDos = brenda
personaDos == brenda // Regresa true porque ambas tienen la misma referencia o sea son el mismo objeto en memoria RAM
personaDos === brenda // Regresa true porque ambos  tienen la misma referencia


// Da false porque se esta creando un nuevo objeto por tanto tiene otra referencia
var personaTres = {
    ...brenda //Desglosar el objeto sachas
}

personaTres = brenda // Dara false porque ambos tienen distinta referencia

// Si cambiamos un valor que apunta a una misma referencia se cambiara ese valor en todos los objetos que 
// apunten a esa referencia.

personaDos.nombre = "Luz"
console.log(personaDos)
console.log(brenda)


// Cuando son dos objetos distintos y se cambia el nombre a un objetoe este solo cambiara en ese objeto
// porque no estan apuntando ala misma referencia en memoria