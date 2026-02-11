import React from 'react'
import { useParams } from 'react-router'
import { products } from '../HomeScreen/HomeScreen'

export default function ProductDetailScreen() {
    /* 
    useParams es un hook de react-router que nos trae un objeto con todos los parametros de la url
    */
    // /product/1 => {product_id: 1}
    // /product/hola => {product_id: 'hola'}
    const objeto = useParams()
    console.log(objeto)

    const product_selected = products.find(
        (product) => {
            return Number(product.id) === Number(objeto.product_id)
        }
    )

    if(!product_selected){
        return <h1>Producto no encontrado</h1>
    }
  return (
    <div>
        <h1>
            Detalle del producto: {product_selected.title}
        </h1>
    </div>
  )
}
