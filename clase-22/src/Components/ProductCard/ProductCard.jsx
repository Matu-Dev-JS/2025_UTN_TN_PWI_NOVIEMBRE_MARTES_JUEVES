/* 
Un componente es una funcion/metodo que retorne un JSX
Los componentes suelen por buenas practicas ser llamados con la primera letra en mayuscula
Los componentes se deben escribir en un archivo .jsx

Los componentes asi como las funciones en programacion nos sirven para separar la responsabilidades de la app, particulamente en el caso de los componentes, la responsabilidad de renderizado

Si queremos usar un componente debemos instanciarlo como componente, es decir como si fuera un elemento de HTML
"Llamarlo as a component"
<ProductCard />

las props sirven para trasmitir informacion a un componente
El primer parametro de un componente y unico es PROPS, no importa si lo llamas como props, cualquier cosa que definas como primer parametro del componente es props
*/

/* function ProductCard (props){

  console.log(props)
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dicta aliquid! Iste esse voluptatem, excepturi sed non fugiat. Explicabo dignissimos fuga accusantium? Ad expedita, facere quisquam hic sit ea in!</p>
      <span>Precio: 1000$</span>
      <button>Comprar</button>
    </div>
  )
} */
import './ProductCard.css'
function ProductCard({ title, price }) {

    return (
        <div className="product-card">
            <h2>{title}</h2>
            <img src='/images/auto-rojo-2.jpg' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dicta aliquid! Iste esse voluptatem, excepturi sed non fugiat. Explicabo dignissimos fuga accusantium? Ad expedita, facere quisquam hic sit ea in!</p>
            <span>Precio: ${price}</span>
            <button>Comprar</button>
        </div>
    )
}


export {ProductCard}

/* 
Un modulo puede exportar multiples cosas 
Un modulo SOLO PUEDE EXPORTAR UNA COSA POR DEFECTO
*/

/* export default ProductCard */