//estructura condicional simple
/* 

if(condicion logica){
todas las lineas de condigo que quiero que el programa haga si se cumple la condicion}
else{
todas las lineas de codigo que quiero que el programa haga no se cumple la condicion}

estructura condicional con else-if

if(condicion logica){
todas las lineas de condigo que quiero que el programa haga si se cumple la condicion}
else-if(condicion2){
todas las lineas de codigo que quiero que el programa haga no se cumple la condicion1, pero si la condicion 2

}

*/
//  or
const edad =  parseInt(prompt("ingresa tu edad"));
console.log(edad)
//si la edad esta entre 0 y 110 años
if(edad > 0 && edad <=110){
    if (edad >= 18) {
    alert("sos mayor de edad");
} else {
        alert("sos menor de edad");
    }
}else(
    alert("valor erroneo")
)


