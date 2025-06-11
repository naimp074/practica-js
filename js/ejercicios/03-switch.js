//Cree un programa al estilo de un cajero automatico con las siguientes opciones:
//1- consultar el saldo
//2- ingresar dinero
//3- extraer dinero

/* 
switch (opcion){
case 1:
    todas las lineas de codigo que quiero hacer si la opcion del usurio es 1
    break;
case 2:
    todas las lineas de codigo que quiero hacer si la opcion del usurio es 1
    break;
case n:
    todas las lineas de codigo que quiero hacer si la opcion del usurio es 1
    break;
    default:
        todas las lineas que quiero ejecutar si no se cumplio ningun caso anterior
}
*/
const opcion = prompt(
  "Seleccione una opcion: 1- Consultar saldo, 2- Ingresar dinero, 3- Extraer dinero"
);
let saldo = 10000;

switch (opcion) {
  case "1":
    alert("Su saldo es $" + saldo);
    break;

  case "2":
    const deposito = parseFloat(
      prompt("Ingrese el monto que desea ingresar: ")
    );
    if (deposito > 1000 && deposito <= 2000000) {
      console.log(deposito);
      saldo = saldo + deposito;
      document.writeln(
        `Ingresaste $${deposito}, por lo tanto tu saldo actual es: $${saldo}`
      );
    } else {
      alert("Ingresaste un monto invalido");
    }
    break;

  case "3":
    const extraccion = parseFloat(
      prompt("Ingrese el monto que desea extraer: ")
    );
    if (extraccion <= saldo) {
      saldo = saldo - extraccion;
      document.writeln(
        `Extrajiste $${extraccion}, por lo tanto tu saldo actual es: $${saldo}`
      );
    } else {
      alert("ingresaste una opcion erronea");
    }

    break;
  default:
    alert("Ingresaste una opcion erronea");
}
