/* 
- Operadores logicos
- Condicionales
- Bucles
*/

/* Operadores logicos */
/* 
!  NOT
NEGACION
Siempre retorna el valor booleano opuesto del valor a negar
!8 = false
!0 = true

let estaPrendida = true
let estaApagada = !estaPrendida

let esMayorDeEdad = edad >= 18
let esMenorDeEdad = !esMayorDeEdad


&& AND
El and va a seleccionar uno de de 2 datos
Evaluara el primer dato y si es truthy seleccionara al segundo, si es falsy seleccionara al primero

17 && null

let esMayorEdad = false
let tieneSuficienteDinero = true

Solo dejare pasar al usuario que sea mayor de edad tenga dinero suficiente
let puedePasar = esMayorDeEdad && tieneSuficienteDinero 

Tablas de la verdad

true && true = true
true && false = false
false && true = false
false && false = false


OR ||
El and va a seleccionar uno de de 2 datos
Evaluara el primer dato y si es truthy seleccionara al primero, si es falsy seleccionara al segundo

null || NaN

'' || 1

let diaEstaSoleado = true
let tengoGanas = false

si el dia esta soleado o tengo ganas voy a pintar mi casa
voyAPintarMiCasa = diaEstaSoleado || tengoGanas


Tablas de la verdad

true || true = true
true || false = true
false || true = true
false || false = false
*/

/* Condiciones */
/* Nos permiten elegir el flujo de nuestro codigo */
/* 
IF:
Si el valor dentro de los () es truthy entonces el bloque de codigo se ejecutara
ELSE:
Sino se ejecutara el else
*/

/* let podesIngresar = false

if(podesIngresar){
    console.log('dejar pasar')
}
else{
    console.log('no podes pasar')
} */

/* ELSE IF: Nos permite hacer una segunda condicion luego del if */

/* 
let edad = 18
let nombre = 'pepe' 
*/

/* 
Si el usuario es pepe decir por consola 'Pase jefe'
Si el usuario es mayor de edad decir por consola 'pase'
Si el usuario es menor de edad y no es pepe entonces decir por consola 'no podes pasar'
*/

/* 
if(nombre === 'pepe'){
    console.log('Pase jefe')
}
else if ( edad >= 18 ){
    console.log('Pase')
}
else{
    console.log('No podes pasar')
} 
*/

/* 
Numero dia sera un valor del 0 al 6, crear una variable que guarde el nombre_del_dia, el nombre del dia esta determinado por el numero_dia
Si es 0 : 'lunes'
Si es 1 : 'martes'
Si es 2 : 'miercoles'
Si es 3 : 'jueves'
Si es 4 : 'viernes'
Si es 5 : 'sabado'
Si es 6 : 'domingo'
Si el dia no es un numero entre 0 y 6 entonces decir por consola 'Dia no valido'
*/
/* let numero_dia = 4
let nombre_del_dia = null */
/* Desarrollar aqui.. */


/* if(numero_dia === 0){
    nombre_del_dia = 'lunes'
}
else if (numero_dia === 1){
    nombre_del_dia = 'martes'
}
else if (numero_dia === 2){
    nombre_del_dia = 'miercoles'
}
else if (numero_dia === 3){
    nombre_del_dia = 'jueves'
}
else if (numero_dia === 4){
    nombre_del_dia = 'viernes'
}
else if (numero_dia === 5){
    nombre_del_dia = 'sabado'
}
else if (numero_dia === 6){
    nombre_del_dia = 'domingo'
}
else{
    console.log('Dia no valido')
} */


/* 
prompt: Solicitar datos, el dato ingresado siempre es un string, almenos que le den al boton de cancelar, en ese caso devolvera un null
alert: Enviar un mensaje por alerta
*/
/* 
let nombre = prompt('Ingresa un nombre')

if(nombre == 'pepe'){
    alert("hola jefe")
}
else{
    alert("No te conozco")
} */

/* 
Solicitar al usuario un numero, si el dato ingresado por el usuario es un numero positivo entonces calcular el 21% de ese numero y decir por alert: 'El precio del iva es: $iva y el precio final es $iva + precio_original'
Sino decir por alerta 'Precio no valido'
PRO TIP: isNaN()

isNaN : Transforma tu dato a numero y si esta transformacion termina en un NaN entonces isNaN devolvera un true

isNaN(7) false
isNaN('7') false
isNaN('pepe') true
*/

/* 
let precio = prompt("ingrese precio:"); //Si da a aceptar sin escribir es '' y si da cancelar null

if (
    precio
    &&
    !isNaN(precio) 
    && 
    Number(precio) >= 0
) {
    precio = Number(precio);
    let iva = precio * 0.21;
    let precio_final = precio + iva;
    alert('El precio del IVA es: $' + iva + ' y el precio final es: $' + precio_final);
} else {
    alert("No es un precio valido");
} */

/* 
BUCLES

El bucle nos permite repetir un x bloque de codigo

FOR: Por conteo
Se usa: Cuando sabes cuantas veces queres repetir x accion
Mandar 10000 mails
Quiero eliminar a todos los usuarios de un grupo (Eliminamos a tantos usuarios como hayan registrados en el grupo)

WHILE: Condicional
Se usa: Cuando no sabes cuantas veces queres repetir una accion, osea lo sabes por condicion

Solicitar por prompt un dato hasta que el usuario escriba 'pepe'
Solicitar un numero por prompt hasta que el usuario escriba un numero valido
*/

/* let numero = prompt('ingresa un numero') */

/* SI la condicion es verdadera volve a ejecutar el bloque de codigo */
/* while(!numero || isNaN(numero)){
    numero = prompt('El numero ingresado no es valido, por favor ingresa nuevamente')
}
alert("Dato ingresado") */


/* Quiero mandar 3 mails, por cada mail solicitare al usuario un asunto y lo enviare  */
for(
    let iteracion = 1;
    iteracion <= 3; //Limite: Cuando esta condicion de false, el bucle finalizara
    iteracion = iteracion + 1 //actualizacion
){
    let asunto = prompt('ingresa el asunto del mail ' + iteracion)
    console.log('Mail enviado con asunto: ' + asunto)
}

/* Tarea:

Hacer un algoritmo de promedio
Solicitar al usuario la cantidad de notas a promediar
Solicitar la cantidad de notas indicada por el usuario y acumularlas (osea sumarlas entre si)
Luego de hacer la sumatoria dividir las notas por la cantidad y mostrar por consola el promedio

(Opcional) Validar que la nota sea un numero
*/