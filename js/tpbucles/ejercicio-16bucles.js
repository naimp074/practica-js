//Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

const text = prompt("Escriba una cadena de texto: ");
const textReves = text.split("").reverse().join("");

document.writeln(`El texto al reves es: ${textReves}`);
