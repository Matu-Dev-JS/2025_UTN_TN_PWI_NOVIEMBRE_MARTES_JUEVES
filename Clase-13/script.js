/* Operadores aritmeticos */


/* 
CONCATENACION
Transforma el dato NO STRING a STRING
+ : Es la union entre 2 string



OPERADORES ARITMETICOS
Retornan un numero
El dato que no sea un numero sera pasado a numero y se operara

+ : SUMA
    Ocurre cuando no hay un string
- : RESTA
* : MULTIPLICACION
/ : DIVISION

CUALQUIER OPERACION CON NAN excepto la contenacion da como resultado un NAN
*/

/* 7 - 4 //3 */
/* 60 - null
60 - Number(null)
60 - 0 // 60 */
/* 'pepe' - null
Number('pepe') - Number(null)
NaN - 0 //NaN */

/* null + "true"
String(null) + 'true'
"null" + 'true' // "nulltrue" */
/* 
Boolean( String( 0 ) ) - null
Boolean( "0" ) - null
true - null
Number(true) - Number(null)
1 - 0
1 */

/* 
Callstack
1 - Boolean
2 - String

Orden de resolucion
1 - String
2 - Boolean
*/

/* Comparadores */
/* 
Nos permiten comparar datos 
Siempre devuelven booleanos
==: Es igual a
===: Es estrictamente igual
!=: No es igual
!==: No es estrictamente igual
>: Mayor
<: Menor
>=: Mayor o igual
<=: Menor o igual
*/

/* 
NaN es el unico valor incomparable en JS, es decir no es igual a ningun dato, nisiquiera si mismo
*/

/* 
Number('pepe') == Number('pepe')
NaN == NaN 
*/

/* prompt pide un dato al usuario y devuelve el string del dato ingresado */
/* isNaN recibe un dato y te duvuelve un booleano dependiendo si el dato ingresa es o no un NaN */
/* 
var edad = prompt('ingresar un dato')
if(isNaN(edad)){
    console.error('La edad ingresada no es un numero')
}
 */


/* Variables */
/* 
VAR
LET
CONST
*/

/* ES6 */
/* 
LET 
El valor incial de let es undefined
No se puede redeclarar en el mismo bloque
Si se puede reasignar el valor
No tiene hosting
*/

/* let nombre = 'mati'

{
    let nombre = 'pepe'
    {
        nombre = 'juan'
    }
    
}
console.log(nombre)
 */
/* 
let nombre = 'messi'
{
    nombre = 'juan'
    console.log(nombre) 
    {
        let nombre = 'jose'
        console.log(nombre)
    }
    console.log(nombre)
    {
        nombre = 'pepesito'
        console.log(nombre)
    }
    console.log(nombre)
    nombre = 'maria'
    console.log(nombre)
}
console.log(nombre)
 */
/* 
juan
jose
juan
pepesito
pepesito
maria
maria
*/


/* let nombre = 'juan'
{
    {
        let nombre
        {
            let nombre = 'pedrito'
            console.log(nombre)
        }
        console.log(nombre)
        {
            nombre = 'juancito'
            console.log(nombre)
        }
        nombre = 'maria'
        console.log(nombre)
    }
    let nombre 
    console.log(nombre)
}
console.log(nombre) */

/* 
pedrito 
undefined
juancito
maria
undefined
juan
*/
/* CONST */
/* Es una variable que se usa para valores que no van a variar del principio al final de la ejecucion del programa */
const PI = 3.14
const IVA = 21


/* 
DEBEN SER inicializadas
NO SE PUEDEN REASINGAR
*/

/* Operadores logicos */

/* Condicionales */
/* 
IF
ELSE
ELSE IF
*/