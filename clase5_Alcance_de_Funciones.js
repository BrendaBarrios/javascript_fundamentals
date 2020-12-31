var nombre = 'Brenda' // var global

// Variable global : Si esta definida fuera de las funciones , se puede acceder desde cualquier función.
// Cualquier cambio que se haga en una variable local no afecta a la variable global.


// Efecto de lado : Al invocar tiene un efecto colateral  porque toca variables que no estan definidas  dentro de ellas 

function imprimeNombreMayusculas(nombre){
    nombre = nombre.toUpperCase() // var local
    console.log(nombre)

}

imprimeNombreMayusculas(nombre)
console.log(nombre)
