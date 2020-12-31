// Funciones : Son pedazos de código reutilizables

var nombre = 'Sacha', edad = 28


// Sin parametros
function imprimirEdad(){
    console.log(` ${nombre} tiene ${edad} años`);
}

// Con parametros
function imprimirEdadParametro(name,age ){
    console.log(`${name} tiene ${age} años`);
}

imprimirEdad();
imprimirEdadParametro('Yasmin', 22);

// Coloca los parametros en el orden correcto porque javascript no muestra error. Es lenguaje interpretado.

imprimirEdadParametro(78 , 'Yo'); // Da mensaje 
imprimirEdadParametro(); // coloca undefined en los valores
imprimirEdadParametro('tu'); // coloca undefined en el valor de la edad