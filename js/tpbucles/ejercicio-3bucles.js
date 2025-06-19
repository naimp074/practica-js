//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
let textoFinal = ""; 
let entrada;

while (true) {
  entrada = prompt("Escribí una cadena de texto (Cancelar para salir):");

  if (entrada === null) {
     
    break;
  }

  if (textoFinal === "") {
    textoFinal = entrada;  
  } else {
    textoFinal += "-" + entrada;  
  }
}

alert("Texto final: " + textoFinal);