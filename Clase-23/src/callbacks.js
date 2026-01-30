/* 
Una callback es la accion de pasar una funcion como parametro de otra funcion
Pensalo como si te dijiera salta 10 veces y al terminar hace lo que te diga en esta hoja
La hoja seria la callback

function saltar (hoja){
    console.log("salto 10 veces")
    hoja()
}

function agacharte (){
    console.log("Agachate")
}

saltar(agachate)
 */

function solicitarDato (mensaje, error, validacionCb){
    let dato = prompt(mensaje)
    while(!validacionCb(dato)){
        alert(error)
        dato = prompt(mensaje)
    }
    return dato
}





const edad = solicitarDato(
    'Dame una edad', 
    'Error, dame una edad valida', 
    function(dato){
        return dato && !isNaN(dato)
    }
)


const dinero = solicitarDato(
    'Dame un dinero', 
    'Error, dame un dinero valida', 
    function(dato){
        return dato && !isNaN(dato) && dinero > 0
    }
)

const personas = [
    {
        id: 1,
        name: 'pepe',
        edad: 30
    },
    {
        id: 2,
        name: 'jose',
        edad: 50
    },
    {
        id: 3,
        name: 'juan',
        edad: 40
    }
]

//Metodos avanzados de array (recomiendo mucho aprender el MAP)

const personasMas35 = personas.filter(
    (persona) => {
        return persona.edad > 35
    }
)

const jose = personas.find(
    (persona) => {
        return persona.nombre === 'jose'
    }
)