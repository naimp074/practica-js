//Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.

//Nota: ver funcion Math()

let nomb1 = prompt("Ingrese el primer nombre:");
let edad1 = parseInt(prompt(`Ingrese la edad de ${nomb1}: `));

let nomb2 = prompt("Ingrese el segundo nombre:");
let edad2 = parseInt(prompt(`Ingrese la edad de ${nomb2}: `));

let nomb3 = prompt("Ingrese el tercer nombre:");
let edad3 = parseInt(prompt(`Ingrese la edad de ${nomb3}: `));

let edadMay = Math.max(edad1, edad2, edad3);
let nombMay;

if (edadMay === edad1) {
  nombMay = nomb1;
} else if (edadMay === edad2) {
  nombMay = nomb2;
} else {
  nombMay = nomb3;
}

document.writeln(`La persona mayor es: ${nombMay} (${edadMay} años)`);
