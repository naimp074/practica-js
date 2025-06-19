//Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50)

//1
//12
//123
//1234
//12345
//123456
//...

let numero;

while (true) {
    numero = parseInt(prompt('Ingrese un numero entre 1 y 50: '));

    if (!isNaN(numero)) {
        if (numero >= 1 && numero <= 50) {
            for (let i = 1; i <= numero; i++) {
                for (let j = 1; j <= i; j++) {
                    document.writeln(j);
                }
                document.writeln("<br>");
            }
            break;
        } else {
            alert('El numero no esta dentro del rango de 1 a 50');
        }
    } else {
        alert('El valor que ingreso es invalido');
    }
}
