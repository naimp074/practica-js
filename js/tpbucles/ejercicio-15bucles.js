//Realiza un script que cuente el número de vocales que tiene un texto.

let text = prompt("Ingrese un texto: ")
let cont = 0;
let vocales = "aeiouAEIOU";

for (let i = 0; i < text.length; i++) {
  if (vocales.includes(text.charAt(i))){
    cont++;
  }
}
document.writeln(`La cantidad de vocales de la frase es: ${cont}`)