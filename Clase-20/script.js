/* 
JS para trabajar con asincronia utiliza promesas.
Las promesas son un objeto con estado que guarda el estado de la promesa
*/

/* 
Promesa de consulta al servidor
consultaAlServidor() ({estado: "pending" ('resolved', 'rejected')})
*/

/* 
La funcion fetch nos permite ordenar al navegador que ejecute una consulta HTTP a x direccion
*/

let estado_tareas = null

async function consultarAUnaAPI (){
    console.log('hola')
    const respuesta_HTTP = await fetch(
        'https://jsonplaceholder.typicode.com/todos',
        {
            method: 'GET'
        }
    )

    console.log({respuesta_HTTP})

    //Transformamos la carga util y leemos como JSON
    const respuesta = await respuesta_HTTP.json()
    estado_tareas = respuesta
}


consultarAUnaAPI()
console.log("operacion super importante")
console.log("Operacion 2")
