
/* Tarea:

Hacer un algoritmo de promedio:

Solicitar al usuario la cantidad de notas a promediar.
Solicitar la cantidad de notas indicada por el usuario y acumularlas (osea sumarlas entre si)
Luego de hacer la sumatoria dividir las notas por la cantidad y mostrar por consola el promedio

(Opcional) Validar que la nota sea un numero
*/

//prompt: Cuantas notas queres promediar?
//input: un x numero, ej: 3
//Valido que el numero sea numero y si no vuelvo a solicitar



//Validar que cantidad_notas_promediar sea numero, entero, positivo 
//Mientras cantidad_notas_promediar sea un dato no numerico, decimal, 0 o negativo el programa debe volver a solicitar la cantidad_notas_promediar

let cantidad_notas_promediar = prompt('ingresa un numero de notas a promediar')

while( 
        !cantidad_notas_promediar 
        || 
        isNaN(cantidad_notas_promediar) 
        || 
        Number(cantidad_notas_promediar) <= 1
        ||
        Number(cantidad_notas_promediar) !== parseInt(cantidad_notas_promediar)
    ){
    cantidad_notas_promediar = prompt('Error, ingresa como cantidad de notas a promediar un dato numerico, entero mayor a 1')
}

cantidad_notas_promediar = Number(cantidad_notas_promediar)
let sumatoria = 0

/* Repito la ejecucion del bloque de codigo de for segun cual sea el valor de cantidad_notas_promediar */
for(
    let numero_nota = 1;
    numero_nota <= cantidad_notas_promediar;
    numero_nota = numero_nota + 1
){
    let nota_a_promediar = prompt('Ingresa la nota a promediar (1 al 10)')

    while(
        !nota_a_promediar 
        || 
        isNaN(nota_a_promediar) 
        || 
        Number(nota_a_promediar) < 0
        ||
        Number(nota_a_promediar) > 10
    ){
        nota_a_promediar = prompt('Error, la nota debe ser un numero positivo, vuelve a ingresar')
    }
    nota_a_promediar = Number(nota_a_promediar)
    sumatoria = sumatoria + nota_a_promediar
}

let promedio = sumatoria / cantidad_notas_promediar

alert('El promedio de notas es ' + promedio.toFixed(1))

//logica basica de un promedio
/* 
sumatoria = 0
sumatoria = sumatoria + 5
sumatoria = sumatoria + 3
sumatoria = sumatoria + 8

promedio = sumatoria / 3 
*/