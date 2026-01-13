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

const message = {
    id: 1,
    sender_name: 'pepe',
    text: 'Hola que tal',
    isVip: true,
    isPinned: true,
    attachments: [
        'https://scontent.ffdo4-1.fna.fbcdn.net/v/t39.30808-6/480830852_1195733161920624_3504195831939762763_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF71kLQYUCR_Gi8O-0uY_QkpFjlGkaInKykWOUaRoicrJz-sO4IXu_EEggveYKPDWnrvcP2O_y1zlaECtB5_kdV&_nc_ohc=kJbeISkFpSsQ7kNvwHyrJeD&_nc_oc=AdmOhv4EIxdYVULy7zh9JXz3-gJU3I8Nj7rx7bAcUAdZQFkI5aD74bnSb3iuQnXbXSBeLzzaNhnLaHFVttC8nyHR&_nc_zt=23&_nc_ht=scontent.ffdo4-1.fna&_nc_gid=8iEY8252STYCLmQWhR82iQ&oh=00_Afor4NGAgAgLGbA2aSts3O_3OT7_xHa5Po1qEQe0FC9pFg&oe=696CC732',

    ]
}

//Renderizar el mensaje dentro de un div
//Si el mennsaje es vip deberia tener la class='vip' que debe hacer algun cambio visual, por ejemplo el texto resaltado (text-shadow)
//Si isPinned es verdadero el mensaje debera tener algun texto en alguna parte que indique que esta marcado (puede ser un icono o y mas recomendable un texto que diga 'marcado')
//(Opcional) hacer el renderizado de los attachments (archivos adjuntos) abajo del mensaje (Aclaracion: Todos los attachments seran imagenes )