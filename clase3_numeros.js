var edad  = 22


// Incrementar
var incremento = edad + 1
edad += 1


// Decremento
var peso = 76 
var decremento = 76 - 2
peso -= 1

// Sumar numeros
var tortilla = 2
peso = peso + tortilla
peso += tortilla

// Resta
var jugar = 5
peso = peso - jugar
peso -= jugar

// Decimales : Guardar decimales no es muy preciso ya que  se guarda con cantidad de decimales especificos
var vino = 200.5
var total = vino * 3 
//Decimal especificos
total = vino * 100 * 3 / 100

// Redondear
total = Math.round(vino * 100 * 3 ) / 100

// Agarar dos decimales despues dela coma devuelve un string
totalStr = total.toFixed(2) 

// Parsear un string a float
var totalFloat = parseFloat(totalStr)


// Divisiones
var pizza = 8
var personas = 2

var cantidadPorcionPersona = pizza / personas

