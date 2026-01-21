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


//El lugar en memoria donde vamos a guardar como esta nuestra app
/* let estado_tareas = {
    tareas: null,
    cargando: false,
    error: null
}

const contenedor_principal = document.getElementById('contenedor-principal')

function renderTareas() {
    console.log(estado_tareas)
    if (estado_tareas.cargando) {
        contenedor_principal.innerHTML = `<span>Cargando...</span>`
        return
    }
    if (estado_tareas.error) {
        contenedor_principal.innerHTML = `<span class="error">Hubo un error al cargar la lista, prueba reintentar</span>`
        return
    }
    if (estado_tareas.tareas && estado_tareas.tareas.length === 0) {
        contenedor_principal.innerHTML = `<span>No hay tareas</span>`
        return
    }
    if (!estado_tareas.tareas) {
        return
    }
    let html = ''
    for (let tarea of estado_tareas.tareas) {
        html = html + `
        <div>
            <h2>${tarea.title}</h2>
            <span>Estatus: ${tarea.completed ? 'Completada' : 'Pendiente'}</span>
        </div>
        `
    }

    contenedor_principal.innerHTML = html
}

renderTareas()

function setTareas(valor) {
    estado_tareas = valor
    renderTareas()
}

async function cargarTareas() {
    try{
        setTareas({ ...estado_tareas, cargando: true })
        const respuesta_HTTP = await fetch(
            'https://jsonplaceholder.typicode.com/todos',
            {
                method: 'GET'
            }
        )
    
        //Transformamos la carga util y leemos como JSON
        const respuesta = await respuesta_HTTP.json()
        setTareas({ ...estado_tareas, cargando: false, tareas: respuesta })
    }
    catch(error){
        setTareas({ ...estado_tareas, cargando: false, error })
    }
}


renderTareas()
cargarTareas() */

/* 
Consumir una API

Consumir https://swapi.info/api/vehicles que traera la lista de vehiculos
Imprimir en pantalla un listado de nombres de los vehiculos, modelo y precio (Pueden mostrar mas cosas si quieren)
Imprimir en pantalla el cargando mientras se esten obteniendo los datos del servidor

*/


let estado_vehiculos = {
    vehiculos: null,
    cargando: false,
    error: null
}
const contenedor_principal = document.getElementById('contenedor-principal')
function renderVehicules(){
    if(estado_vehiculos.cargando){
        contenedor_principal.innerHTML = `<span>Cargando...</span>`
        return 
    }
    if(estado_vehiculos.error){
        contenedor_principal.innerHTML = `<span>Hubo un error al cargar la lista, prueba reintentar</span>`
        return
    }
    if(estado_vehiculos.vehiculos && estado_vehiculos.vehiculos.length === 0){
        contenedor_principal.innerHTML = `<span>No hay vehiculos</span>`
        return
    }
    if(!estado_vehiculos.vehiculos){
        return
    }
    let html = ''
    for(let vehiculo of estado_vehiculos.vehiculos){
        html = html + `
        <div>
            <h2>${vehiculo.name}</h2>
            <span>Modelo: ${vehiculo.model}</span>.
            <br>
            <span>Precio: ${vehiculo.cost_in_credits === "unknown" ? "Desconocido" : vehiculo.cost_in_credits}</span>
        </div>
        `
    }
    contenedor_principal.innerHTML = html
}
renderVehicules()
function setVehiculos (valor){
    estado_vehiculos = valor
    renderVehicules()
}


async function cargaVehiculo (){
    setVehiculos({...estado_vehiculos, cargando: true})
    const respuesta_HTTP = await fetch(
        'https://swapi.info/api/vehicles',
        {
            method: 'GET'
        }
    )
    const respuesta = await respuesta_HTTP.json()
    setVehiculos({...estado_vehiculos, cargando: false, vehiculos: respuesta})
    
}
renderVehicules()
cargaVehiculo()
