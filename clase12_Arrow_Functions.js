// Arrows functions 

// En javascript existe otra manera de escribir funciones  asignando a una variable una funcion

var personaMayor = {
    nombre: "Brenda",
    edad: 22
}

var personaMenor = {
    nombre: "Jasmine",
    edad: 10
}

const MAYOR_DE_EDAD = 18;


// Se le llama funcion anonima se utiliza el const para definir que es una funcion 
const esMayorDeEdad = function (persona){
    return persona.edad >= MAYOR_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

imprimirSiEsMayorDeEdad(personaMayor)
imprimirSiEsMayorDeEdad(personaMenor)


// Cuando se tiene un solo parametro en la función se pueden oviar los parentesis
// Cuando este la variable => estoe s una funcion
// Si solo retorna algo se puede borrar el return  y las llaves
// Implicitamente returna el valor de  la comparción 
const esMayorDeEdadDos =  persona => persona.edad >= MAYOR_DE_EDAD


// Desesctructutando objetos hace lo mismo que la de arrriba pero solo usando la edad no todo el objeto
const esMayorDeEdadDesc =  ({persona}) =>  edad >= MAYOR_DE_EDAD


function imprimirSiEsMayorDeEdadDos(persona){
    if (esMayorDeEdadDos(persona)){
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}


function permitirAcceso(persona){
    if(!esMayorDeEdadDos(persona)){
        console.log(`${persona.nombre} ACCESO DENEGADO`)
    } else {
        console.log(`${persona.nombre} ACCESO PERMITIDO`)
    }


}

permitirAcceso(personaMenor)
permitirAcceso(personaMayor)


// Reto menor de edad como Arrow function retorne la negacion de es mayor de edad
var menorEdad = ({edad}) => edad <= MAYOR_DE_EDAD ? console.log('Acceso permitido') : console.log("ACESSO DENEGADO");


