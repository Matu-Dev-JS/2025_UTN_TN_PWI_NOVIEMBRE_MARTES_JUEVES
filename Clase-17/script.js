
/* 
ARRAYS
Nos permiten listar datos de forma ORDENADA
El orden se determina por el indice de cada elemento, el indice se determina por la posicion
La posicion es super importante porque nos permite ubicar cierto elemento
Los elementos de un array pueden ser de cualquier tipo
*/


/* const usuarios = [
    {
        name: 'pepe',
        edad: 20
    }, //indice: 0
    {
        name: 'Juan',
        edad: 33
    }  //indice: 1
]

const notas = [1, 5, 10]

const raro = [
    'hola', 
    7, 
    function(){
        console.log('hola')
    }
]

const posiciones_tateti = [
    ['o', '', ''],
    ['', 'o', ''],
    ['', '', 'o']
]

console.log('El segundo usuario se llama ' + usuarios[1].name) */

//propiedades de un array
//Un array solo tiene una propiedad llamada length
//length nos permite saber la longitud es decir la cantidad de elementos que hay en el array (se cuenta desde 1)
/* const nombres = ['pepe', 'maria', 'julieta']
console.log(nombres.length) */
//Recortar la longitud a 1, eliminando a los registros mayores a 1
//nombres.length = 1
//nombres.length = 0 //vaciar array

//Esto es mala practica
//nombres.pepe = 'hola'

//metodos de array



//Todos los datos primitivos al asignarse a una variable generan su propio lugar en la memoria
/* let nombre_1 = 'pepe'

let nombre_2 = nombre_1

nombre_1 = 'juan'

console.log(nombre_2) */

//Los objetos y arrays al crearse crear su propio identificador, y al asignar una variable a ese array lo que asigno es la referencia al identificador

/* const nombres_1 = ['pepe', 'juan']

const nombres_2 = nombres_1

nombres_1.length = 0

console.log(nombres_2) */ //[]

//Para solucionar este problema debemos crear una nueva referencia
/* const nombres_1 = ['pepe', 'juan']

const nombres_2 = [...nombres_1] //Creo otro array con los datos de nombres_1

nombres_1.length = 0

console.log(nombres_2) */



/* METODOS DE ARRAY */
//Los metodos de array son funcionalidades de los arrays

const nombres = ['pepe', 'maria', 'julieta']


//Agregar un elemento al final de un array (Mutable)
//nombres.push('juan')

//Agregar un elemento al inicio de un array (Mutable)
//nombres.unshift('luis')

//Eliminar el ultimo elemento de un array (Mutable)
//nombres.pop()

//Eliminar el primer elemento de un array (Mutable)
//nombres.shift()

//Buscar el indice de un elemento, trae el primero en encontrar
//console.log(nombres.indexOf('maria'))

//Empalmar, que nos permite eliminar, agregar o reemplazar elementos por posicion
//Splice
//1er parametro: Indice desde donde quiero empezar a eliminar
//2do parametro: cuantos elementos quiero eliminar
//3er parametro: Elementos a agregar en la posicion

//let posicion_maria = nombres.indexOf('maria')

//Quiero eliminar a maria
//nombres.splice(posicion_maria, 1)

//Quiero remplazar a maria por juan
//nombres.splice(posicion_maria, 1, 'juan')

//Quiero agregar a alguien en el indice de maria
//nombres.splice(posicion_maria, 0, 'juancito')

//console.log(nombres)

const usuarios = [
    {
        name: 'pepe',
        edad: 30,
        id: 5
    },
    {
        name: 'juan',
        edad: 35,
        id: 6
    },
    {
        name: 'pedro',
        edad: 60,
        id: 7
    }
]

//Elimina al usuario con id 6

//Recorro del 0 al 2
//Recorre la lista de usuarios y por cada usuario ejecuta el siguiente bloque de codigo
/* for(
    let indice = 0; 
    indice < usuarios.length; 
    indice = indice + 1
){
    const usuario_seleccionado =  usuarios[indice]
    if(usuario_seleccionado.id === 6){
        usuarios.splice(indice, 1)
        break
    }
}

console.log(usuarios)
 */

//FOR OF Es una forma de hacer un recorrido de un array mucho mas legible
//Esto hace lo mismo que el for de arriba
/* for(const usuario of usuarios){
    if(usuario.id === 6){
        const indice_usuario_eliminar = usuarios.indexOf(usuario)
        usuarios.splice(indice_usuario_eliminar, 1)
        break
    }
} */

const usuarios_2 = [
    {
        name: 'pepe',
        edad: 30,
        id: 5
    },
    {
        name: 'juan',
        edad: 35,
        id: 6
    },
    {
        name: 'pedro',
        edad: 60,
        id: 7
    }
]

/* 
1)
crear una funcion llamada buscarPorNombre que recibira un nombre y buscara a los usuarios que coincidan con ese nombre y los retornara, en caso de no coincidir devolver array vacio.

2) 
crear una funcion llamada buscarPorRangoEdad que recibira 2 numeros (max y min) y buscara a todos los usuarios que tengan una edad dentro del rango. En caso de no coincidir devolver array vacio.
*/