//Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0; // Acumulador de la suma total
let entrada;

while (true) {
  entrada = prompt("Introduce un número (Cancelar para salir):");

  if (entrada === null) {
   
    break;
  }


  let numero = Number(entrada);

  if (isNaN(numero)) {
    alert("Eso no es un número válido.");
    continue; 
  }

 
  suma += numero;
}

alert("La suma total es: " + suma);