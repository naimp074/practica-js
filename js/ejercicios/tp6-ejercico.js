//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
const numero1 = parseFloat(prompt("Ingresa el primer numero:"))
const numero2 = parseFloat(prompt("Ingresa el segundo numero:"))
if(numero1 > numero2 ) {
    document.writeln("El numero mayor es=" + numero1 )
}else if(numero1 < numero2) {

document.writeln("El numero mayor es=" + numero2)
}