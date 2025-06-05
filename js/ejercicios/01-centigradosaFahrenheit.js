//crear un programa que calcule cuantos grados fahrenheit son X grados centigrados. Formula = (x °C × 9/5) + 32
let gradosCentigrado = parseInt(prompt("Ingresa los grados centigrados"))
const gradoFahrenheit = (gradosCentigrado * 9/5) + 32 

document.writeln("los grados centigrados " + gradosCentigrado+"°c, pasados a Faherenheits equivalen a:"+gradoFahrenheit+"°F")

//ventanma emergente para mostrar un mensaje
alert("los gradps centigrados: "+gradosCentigrado+"°C, equivalen a: "+gradoFahrenheit+"°f")