/* 
DOM = Document Object Model 
document es una variable global de tipo objeto que representa toda nuesta pagina
Nos permite interactuar con el HTML de nuestra página
El document naturalmente es un objeto GIGANTE, debido a que tiene que guardar en sus propiedades CADA caracteristica de la pagina

document vs window
Son interfaces para acceder a cosas distintas, document es para el DOM (osea la parte visible de la web), window es para el BOM (browser object model) y sirve para interactuar con el navegador
*/


console.dir(document)


//method .getElementById()

const btnSaludar = document.getElementById('btn-saludar')
console.dir(btnSaludar)
btnSaludar.innerText = 'chau mundo'

let nombre = 'pepe'

const tituloBienvenida = document.getElementById('titulo-bienvenida')

tituloBienvenida.innerText = tituloBienvenida.innerText + ' ' + nombre



/* Dado este objeto imprimir los datos en el HTML */
const sesion = {
    id: 1,
    username: 'pepe',
    role: 'admin',
    email: 'pepe@gmail.com',
    pendingNotifications: 6
}

const titulo = document.getElementById('titulo-primario');
titulo.innerText = `Bienvenido ${sesion.username}`;

const notificaciones = document.getElementById('notificaciones');
notificaciones.innerText = `Tienes ${sesion.pendingNotifications} notificaciones revisa tu casilla electronica ${sesion.email}`;


const contenedor = document.getElementById('contenedor')

function renderOferta (oferta){
    if (oferta && oferta > 0 ){
        return `<span>%${oferta} descuento</span>` 
    }
    else{
        return ''
    }
}

let oferta = 10
contenedor.innerHTML = `
    <hr/>
    <h2>Tv samsung</h2>
    ${
        oferta && oferta > 0 
        ? 
        `<span>%${oferta} descuento</span>` 
        : 
        ''
    }
    ${renderOferta(oferta)}
    <span>Precio: $${ 400 - (400 * oferta / 100)} usd</span>
    <br>
    <button>Comprar</button>
`


/* 
Ternarios
El ternario nos permite hacer condiciones

let condicion = true

condicion 
? console.log('La condicion se cumplio')
: console.log('La condicion no se cumplio')
*/

