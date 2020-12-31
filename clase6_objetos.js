// Un objeto reune ciertas caracteristicas de la vida real. 
// Las llaves delimitan el objeto. Se representan como clave: valor
// Para acceder a una propiedad del objeto se coloca name_object.propierty
// No puede desglosarse el objeto si no se manda el objeto y la propiedad correctas como parametro

var brenda = {
    nombre:'yo',
    apellido: 'Barrios',
    edad: 22

}

var pedro = {
    nombre: 'Pedro',
    apellido:'Perez',
    edad:34
}

// Usando la propiedd
function imprimirNombreMayusculasPropiedad(nombre){
    var nombre = nombre.toUpperCase()
   console.log(nombre)
}

imprimirNombreMayusculasPropiedad(pedro.nombre)



// Usando el objeto
function imprimirNombreMayusculasObjeto(persona){
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}
imprimirNombreMayusculasObjeto(brenda)


//Reduciendo código
function imprimirMatusculas(persona){
    console.log(persona.nombre.toUpperCase())
}
imprimirMatusculas(pedro)


// Accediendo directamente al nombre del objeto y haciendo referenncia a un nuevo nombre
function impriNombreMandandoPropiedadEspecifica({nombre}){
    console.log(nombre.toUpperCase())
}

impriNombreMandandoPropiedadEspecifica({nombre : 'Pepe'})

