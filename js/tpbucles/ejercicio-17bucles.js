//Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

//Ejemplo:

//Input: Hola mundo      Output: la vocal ‘o’ está en la posición 1

const text = prompt("Escriba una cadena de texto: ");
const vocales = "aeiouAEIOU";
let posicion = -1;
let vocalEncont = "";

for (let i = 0; i < text.length; i++) {
  const caracter = text.charAt(i);
  if (vocales.indexOf(caracter) !== -1) {
    posicion = i;
    vocalEncont = caracter;
    break;
  }
}

if (posicion !== -1) {
  document.writeln(`La vocal '${vocalEncont}' esta en la posicion ${(posicion + 1)}`);
} else {
  document.writeln("No se encontro ninguna vocal");
}

