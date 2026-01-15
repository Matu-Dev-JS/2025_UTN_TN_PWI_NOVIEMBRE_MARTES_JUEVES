const login_form_HTML = document.getElementById('login-form')
const login_form_2_HTML = document.getElementById('login-form-2')
    
//el parametro evento nos lo provee la web al dispararse el evento
//Este parametro es un objeto con metadatos del evento
function login (evento){
    //Es un metodo asociado al objeto evento que permite evitar que el evento tenga comportamientos por defecto
    evento.preventDefault()
    //El evento submit por defecto recarga la pagina
    //mostrar por consola los valores capturados del formulario

    //Evento.target nos va a dar una referencia de que elemento se disparo este evento
    //Dicho en criollo 'de que formulario se activo el submit'

    const form = evento.target

    const form_data = {
        email: form.email.value,
        password: form.password.value
    }
    console.log('Datos del login:', form_data)
}

login_form_HTML.addEventListener(
    'submit',
    login
)
login_form_2_HTML.addEventListener(
    'submit',
    login
)

const noCopiar = document.getElementById('no-copiar')

noCopiar.addEventListener(
    'copy',
    function( evento ){
        evento.preventDefault()
    }
)