function presentarse({nombre, apellido}){

    console.log('Hola ' + nombre + ' ' + apellido)
}

function myComponent (props){
    console.log(props.title)
}

let pepe = {
    nombre: 'pepe',
    apellido: 'perez'
}

presentarse(pepe)
myComponent({title: 'hola'})