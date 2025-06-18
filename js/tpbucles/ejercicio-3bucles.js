//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
let textoFinal = ""; // Acumulador
let entrada;

while (true) {
  entrada = prompt("Escribí una cadena de texto (Cancelar para salir):");

  if (entrada === null) {
    // Si el usuario toca "Cancelar"
    break;
  }

  if (textoFinal === "") {
    textoFinal = entrada; // Primera entrada, no agrega guión
  } else {
    textoFinal += "-" + entrada; // Concatenar con guión
  }
}

alert("Texto final: " + textoFinal);