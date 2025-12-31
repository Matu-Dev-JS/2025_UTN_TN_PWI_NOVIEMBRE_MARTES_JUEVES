/* Principios de la programacion */
/* 
DRY: Dont repeat yourself = NO TE REPITAS 
Single Responsabilty: Una funcion solo deberia tener una RESPONSABILIDAD

*/


/* Funciones */
/* 
Nos permiten guardar bloques de codigo en memoria
*/

//Declaracion
/* function saludar(){
    console.log('Hola que tal!')
}
 */
//Invocacion
/* saludar() */



//No es reutilizable
//NO CUMPLE con el principio de la programacion DRY
/* function sumar1mas1 (){
    console.log(1 + 1)
} */

//Version correcta:
/* 
numero_1, numero_2 son parametros

function sumar (numero_1, numero_2){
    console.log(numero_1 + numero_2)
}

sumar(1, 1)
sumar(7, 7) */

//Desarrollar una funcion llamada calcularIva que reciba un precio y retorne el valor del iva

/* 
Recibimos un precio numerico positivo y calculamos su iva, y mostramos el resultado por consola
*/
function calcularIva( precio ){
    let iva = precio * 0.21
    return iva
}

/* let iva = calcularIva(800)
console.log(iva)
alert(iva)
enviarMail('El iva es ' + iva) */

/* 
DESAFIO:
- solicitarNumero(mensaje) debera solicitar un numero por prompt y validarlo, una vez el numero sea correcto retornar el numero solicitado
    Ejemplo de uso:
    - let cantidad_notas_promedio = solicitarNumero('Ingresa un numero')

- solicitarNumeroPositivo(mensaje) debera solicitar un numero positivo por prompt y validarlo, una vez el numero sea correcto retornar el numero solicitado

- promediar(sumatoria, cantidad_numeros) retornara el promedio de la sumatoria

- validarNumeroPostivoEntero(valor) retornara un booleano dependiendo de si el valor cumple con la validacion

*/