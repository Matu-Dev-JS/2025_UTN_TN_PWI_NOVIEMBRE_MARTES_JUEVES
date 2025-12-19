/* 
JS es un lenguaje CASE SENSITIVE (Importan las mayusculas y minusculas)
*/

/* 
TIPOS DE DATOS 
    PRIMITIVOS:
        - string -> texto
            'hola mundo'
            "hola mundo"
            '1'
            '-1'

        - number -> numeros
            1
            -3
            4.12
            NaN

        - boolean -> boleanos (verdadero o falso)
            true / false

        - null -> nulidad / ausencia de dato
            null
            
        - undefined -> no definicion de un dato
            undefined
*/


/* 
    Transformadores / Constructores

    String() Transforma un dato a string
    Number() Transforma un dato a number
    Boolean() Transforma un dato a boolean

*/

/* 
todos los datos son transformables a NUMERO, pero hay casos en los que no se DEBERIA poder
Number('pepe') -> NaN
EL NOT A NUMBER (NAN) se usa cuando se transforma a numero algo que NO deberia transformarse numero

*/

/* console.log( String( 81 ), typeof( String(81) ) ) */
/* 
Valores verdaderos (Truthy) y falsos (falsy)
TODOS LOS VALORES DE JS SON TRANSFORMABLES A BOOLEANO
SI EL RESULTADO DE LA TRANSFORMACION ES:
    TRUE: Decimos que es un valor Truthy
    FALSE: Decimos que el valor es Falsy

Los valores falsies SON:
    0
    null
    undefined
    ''
    NaN
    false

*/

/* Operadores ARITMETICOS */
/* 
El retorna STRING
La concatenacion se usa para unificar textos
Ocurre cuando se operan un string + (cualquier tipo de dato)
Cuando ocurre la concatenacion el dato que no es STRING sera transformado a string (IMPLICITO)
+ : Concatenacion


TODOS RETORNAN NUMEROS
+ : Suma
- : Resta
* : Multiplicacion
/ : Division

*/



/* 
VARIABLES:
Nos permiten guardar DATOS en memoria
*/

//DECLARACION
/* var nombre = 'pepe'

console.log('Hola me llamo ' + nombre) */

/* 'pepe' + true
'pepe' + String(true)
'pepe' + 'true'
'pepetrue' */