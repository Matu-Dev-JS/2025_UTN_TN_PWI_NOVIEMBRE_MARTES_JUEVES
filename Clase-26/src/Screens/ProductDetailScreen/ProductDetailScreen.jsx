import React from 'react'
import { useParams } from 'react-router'

export default function ProductDetailScreen() {
    /* 
    useParams es un hook de react-router que nos trae un objeto con todos los parametros de la url
    */
    const objeto = useParams()
    console.log(objeto)
  return (
    <div>
        <h1>Detalle del producto</h1>
    </div>
  )
}
