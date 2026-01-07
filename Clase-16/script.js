/* 
Objetos
Los objetos los usamos para describir un elemento
Ejemplo
describir un usuario
en vez de 
let nombre_usuario = 'pepe'
let apellido_usuario = 'suarez'
let edad_usuario = 20
*/

let usuario = {
    nombre: 'pepe',
    apellido: 'suarez',
    edad: 20
}

const usuario2 = {
    "nombre": 'pepe',
    "apellido": 'suarez',
    "edad": 20,
    "mejor amigo": {
        "nombre": 'juan',
        "apellido": 'suarez',
        "edad": 22
    }
};



//Reasignacion de una propiedad (Es valido con let y const)
usuario2['nombre'] = 'juancito'
usuario2.apellido = 'pedro'
console.log(usuario2)

/* 
Normalmente declaramos objetos con const ya que const proteje que esa variable siga siendo el objeto y no cambie por algun otro tipo de dato u otro objeto

Esto permite poder confiar a futuro que nuestro usuario2 sea un objeto muy parecido al que se declaro

Esto tambien se relaciona a que uno quiere asegurarse de que x variable sea la misma del principio al fin del programa, en estec caso usuario2 debe ser un objeto con formato de usuario del principio al fin del programa
*/

/* 
Crear 2 objetos de cada tipo
    pais
        - continente
        - capital
        - poblacion
        - superficie
        - moneda
        - idioma

    item
        - id
        - nombre
        - precio
        - stock
        - descripcion
        - rareza

    personaje
        - id
        - nombre
        - vida
        - ataque
        - defensa

*/

