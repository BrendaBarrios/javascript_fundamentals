// Separar el código en funciones más pequeñas que regresen información.

 var personaMayor = {
    nombre: "Brenda",
    edad: 22
}

var personaMenor = {
    nombre: "Jasmine",
    edad: 10
}


// Declaracion de constantes
const MAYOR_DE_EDAD = 18;

function esMayorDeEdad(persona){
    // return persona.edad >= 18;  magic number
    return persona.edad >= MAYOR_DE_EDAD;
    
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