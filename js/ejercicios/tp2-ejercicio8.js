//8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)
//1
//12
//123
//1234
//12345
//123456
//....

let numeroRepeticiones = parseInt(prompt(`ingresa un numero del 1 al 50`));
for (let fila = 0; fila < numeroRepeticiones; fila++) {
  for (let columna = 0; columna <= fila; columna++) {
    document.writeln(columna + 1);
  }

  document.writeln(`<br>`);
}
