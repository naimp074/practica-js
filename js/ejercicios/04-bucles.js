// Estructura de repeticion 
//tipos de bucles: while, for, do-while

/*
while- mientras se cumple tal condicion
whilw(condicion logica){
todas las lineas de codigo que quiero repetir varias veces
agregar alguna linea que haga la condicion logica se cumpla en algun momento
}

*/

let renglon = 100; 
while(renglon <= 50){
    document.writeln(`<p>Renglon ${renglon}</p>`)
    renglon++;
}

// do-while 
/* 
do{
todas las lineas de codigo que quiero
alguna linea que haga  que la condicion logica se deje de cumplir en algun momento

}whulw(condicion logica)
*/
let fila = 100; 
do{
    document.writeln(`<p>Fila N ${fila}</p>`);
    fila++;
}while(fila <= 50)

//for
/*
for(inicializar; condicion logica; incrementar/decrementar variable)
todas las lineas de codigo que quiero
*/

for(let indice = 10; indice >= 0 ; indice--){
document.writeln(`<p>cuenta regresiva N ${indice}</p>`);
}

    