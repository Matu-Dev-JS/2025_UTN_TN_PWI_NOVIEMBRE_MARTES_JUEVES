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

/* 
1)

function validarNumero (dato){
    return !dato || isNaN(dato)
}

function solicitarNumero(mensaje) {
    let dato_ingresado = prompt(mensaje);
    while (validarNumero(dato_ingresado)) {
        alert("Error, ingrese un numero valido.");
        dato_ingresado = prompt(mensaje);
    }
    return Number(dato_ingresado);
}

solicitarNumero('Ingresa tu edad')
solicitarNumero('Ingresa tu plata')  
*/


//Number('') / Number(null) / Number('0') = 0

/* 
    2) 
    solicitarNumeroPositivo(mensaje) debera solicitar un numero positivo por prompt y validarlo, una vez el numero sea correcto retornar el numero solicitado
*/

/* function validarNumero (dato){
    return dato && !isNaN(dato)
}

function validarPositivo (dato){
    return validarNumero(dato) && Number(dato) > 0
}
function solicitarNumeroPositivo( mensaje ){
    let numero_positivo = prompt(mensaje)
    
    while(
        validarPositivo(numero_positivo)
    ){
        numero_positivo = prompt ('Error! ' + mensaje)
    }

    return Number(numero_positivo)
}
function solicitarNumero(mensaje) {
    let dato_ingresado = prompt(mensaje);
    while (validarNumero(dato_ingresado)) {
        alert("Error, ingrese un numero valido.");
        dato_ingresado = prompt(mensaje);
    }
    return Number(dato_ingresado);
}

 */
/* solicitarNumeroPositivo('Dame tu edad')
 */
/* 
WHILE TRUE = Bucle infinito
FOR TRUE = Bucle infinito
Siempre asegurarse de que nuestro bucle tenga una forma de fallar la condicion
*/

/* 
3)
*/


/* function verificarNumero(num){
    return num !== null && num.trim() !== "" && isNaN(num);
} */

/*
function isCancel (dato){
    return dato === null
}    
function verificarNumero(num){
    return (num === "" || isNaN(num));
}

function solicitarNumero() {
    let numero = prompt("ingrese un numero");
        while (true){
            if(isCancel(numero)){
                break;
            }
            else if(verificarNumero(numero)){
                break;
            }
            numero = prompt("Error. ingrese un numero");
        }
    return numero;
}


solicitarNumero("Dame un numero") */

/* function promediar(){
    let sumatoria = 0;
    let cantidadNumeros = solicitarNumeroPositivo("Ingrese la cantidad de numeros a promediar");
    
    for(
        let i = 1; 
        i <= cantidadNumeros; 
        i = i + 1
    ){
        let numero = solicitarNumero(`Ingrese el ${i} ° numero`)
        sumatoria = sumatoria + numero;
    }

    return sumatoria / cantidadNumeros;
} */


/* console.log(++contador) */ //1
/* console.log(contador++) */ //0


//Quiero que incremente y se guarde en la variable
//contador++ //contador = contador + 1

//MAL HECHO contador = contador++ // contador = contador

/* console.log("tv samsung 50\"")
console.log(`
    <h1></h1>
    <h3></h3>
    <button></button>
`) */
/* function validarNumero (dato){
    return dato && !isNaN(dato)
}

function validarPositivo (dato){
    return validarNumero(dato) && Number(dato) > 0
}

function validarEntero (numero){
    return Number(numero) !== parseInt(numero)
}

function validar_numero_positivo_entero(numero){
    return validarPositivo(numero) && validarEntero(numero)
} */