//filter (ES UN METODO NO MUTABLE: SIGNIFICA QUE NO MODIFICA EL ARRAY ORIGINAL)
//find

const productos_servidor = [
    {
        title: 'Tv samsung 42"',
        precio: 2000,
        id: 1
    },
    {
        title: 'Tv samsung 50"',
        precio: 4000,
        id: 2
    },
    {
        title: 'Tv samsung 72"',
        precio: 5000,
        id: 3
    },
    {
        title: 'Tv samsung 91"',
        precio: 7000,
        id: 4
    },
    {
        title: 'Tv samsung 110"',
        precio: 10000,
        id: 5
    }
]

//Filter nos sirve para discriminar a los elementos de un array bajo cierta condicion, por ejemplo todos los productos que su nombre empieze con la letra "A"
const productos_caros = productos_servidor.filter(
    (producto) => {
        return producto.precio > 4500
    }
)

//Find nos sirve cuando queremos buscar un elemento dentro de un array
//Quiero buscar el usuario con DNI tanto
const producto_5 = productos_servidor.find(
    (producto) => {
        return producto.id === 5
    }
)

//MAP ES UN METODO NO MUTABLE
//Map es un metodo que te permite a partir de un array generar otro array
//Ejemplo tengo un array de nombres
//const nombres = ['pepe', 'juan', 'maria']
//Quiero generar un array de personas, donde cada elemento sera un objeto {nombre: nombre}
/* const personas = [
    {
        nombre: 'pepe'
    },
    {
        nombre: 'juan'
    },
    {
        nombre: 'maria'
    }
] */

/* const nombres = ['pepe', 'juan', 'maria']
const personas = nombres.map(
    (nombre) => {
        return {
            nombre: nombre
        }
    }
)

console.log(personas) */

//Otro ejemplo
//Tengo un array de objetos donde cada objeto tiene a, b y operacion
//Quiero generar un array de resultados
/* const operaciones = [
    {
        a: 1,
        b: 1,
        operacion: '+'
    },
    {
        a: 2,
        b: 1,
        operacion: '-'
    }
]

const resultados = operaciones.map(
    (operacion_info) => {
        if(operacion_info.operacion === '+'){
            return operacion_info.a + operacion_info.b
        }
        else if (operacion_info.operacion === '-'){
            return operacion_info.a - operacion_info.b
        }
    } 
)
console.log(resultados) */


//EN info compleja tenemos datos de personas pero en un array, donde el primer dato es el nombre, el segundo la edad y el tercero el salario
const info_compleja = [
    ['pepe', 42, 5000],
    ['maria', 62, 4000],
    ['juan', 22, 3000],
    ['adrian', 82, 6000],
]

const personas_2 = []
for(const persona_compleja of info_compleja){
    personas_2.push(
        {
            edad: persona_compleja[1],
            nombre: persona_compleja[0],
            salario: persona_compleja[2]
        }
    )
}

//Transforma este array en un array de personas (donde cada persona sea un objeto)
const personas = info_compleja.map(
    (persona) => {
        return {
            nombre: persona[0],
            edad: persona[1],
            salario: persona[2]
        }
    }
)
console.log(personas)


const datos_feos = [
    {
        $__id: 1,
        user_usercollection___nombre: 'pepe',
        user_usercollection___edad: 42,
        user_collection____salario: {
            salario__valor: 5000,
            salario__moneda: 'USD'
        }
    },
    {
        $__id: 2,
        user_usercollection___nombre: 'maria',
        user_usercollection___edad: 62,
        user_collection____salario: {
            salario__valor: 4000,
            salario__moneda: 'USD'
        }
    },
    {
        $__id: 3,
        user_usercollection___nombre: 'juan',
        user_usercollection___edad: 22,
        user_collection____salario: {
            salario__valor: 3000,
            salario__moneda: 'USD'
        }
    }
]

const personas_bonitas = datos_feos.map(
    (persona) => {
        return {
            nombre: persona.user_usercollection___nombre,
            edad: persona.user_usercollection___edad,
            salario: persona.user_collection____salario.salario__valor,
            moneda: persona.user_collection____salario.salario__moneda
        }
    }
)
console.log(personas_bonitas)