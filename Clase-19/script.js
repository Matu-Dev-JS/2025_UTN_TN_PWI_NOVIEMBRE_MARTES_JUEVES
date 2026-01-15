const btnSaludar = document.getElementById("btn-saludar");


//Nos permite asociar a un evento del DOM una funcionalidad
/* 
addEventListener recibe 2 parametros
1: Event key (un string que representa el tipo de evento)
2: funcionalidad (una funcion que ejecutara cuando el evento suceda)
*/

function saludar(){
    console.log("Hola mundo")
}

btnSaludar.addEventListener(
    'click',
    saludar
)

btnSaludar.addEventListener(
    'click',
    function (){

    }
)

/* 
Contador
Deberas tener 2 botones uno para decrementar y otro para incrementar
En el medio de esos 2 botones mostraras un numero (inicalmente 0)
TIP:
- Crear una variable que guarde el estado del contador (No tratar de obtener el valor por medio del DOM)
- Crear una funcion de renderContador que imprima el valor actual de la variable contador en pantalla
*/

let contador = 0

const contador_HTML = document.getElementById('contador')
const incrementar_btn_HTML = document.getElementById('incrementar')
const decrementar_btn_HTML = document.getElementById('decrementar')

function renderContador (){
    contador_HTML.innerText = contador
}
function setContador(valor){
    contador = valor
    renderContador()
}


function incrementar (){
    setContador(contador + 1)
}

function decrementar (){
    setContador(contador - 1)
}

incrementar_btn_HTML.addEventListener(
    'click',
    incrementar
)

decrementar_btn_HTML.addEventListener(
    'click',
    decrementar
)
