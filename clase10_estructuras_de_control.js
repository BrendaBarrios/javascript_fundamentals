//  Las estructuras de control definen cuabtas veces se ejecuta un codigo


// 1. Condicionales

var Brenda = {
    nombre:"Brenda",
    apellido: "Baldez",
    edad: 21,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drones: true ,
    genero : "Mujer",
}



function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es: `);

    
    // Si se pone una variable y existe da true por lo tanto entrara
    if(persona.ingeniero){
        console.log('Ingeniero')
    } else {
        console.log('No es Ingeniero')
    }
    if(persona.cocinero){
        console.log('Cocinero')
    } else {
        console.log(' No es cocinero')
    }
    if(persona.cantante){
        console.log(' No es Cantante')
    } else {
        console.log(' No es cantante')
    }
    if(persona.dj){
        console.log('Dj')
    } else {
        console.log(' No es Dj')
    }
    if(persona.guitarrista){
        console.log('Guitarrista')
    } else {
        console.log(' No es guitarrista')
    }
    if(persona.drones){
        console.log('Piloto de drones')
    } else {
        console.log(' No es piloto de drones')
    }
}

imprimirProfesiones(Brenda);

// Reto imprimir si es mayor de edad

function imprimirSiEsMayorDeEdad(persona){
    if(persona.edad > 18){
        console.log("Es mayor de edad");
    } else {
        console.log("Es mayor de edad");
    }

}

imprimirSiEsMayorDeEdad(Brenda);

function imprimeGenero(persona){
    console.log(`${persona.genero == "Mujer" ? " Su genero es Femenino ":" Su genero es Masculino"}`);
}


imprimeGenero(Brenda);