import React from 'react'
import './ProductCard.css'

export default function ProductCard({producto}) {
    return (
        <div className='product-card'>
            <h2>{producto.title}</h2>
            <span>Precio: ${producto.precio} USD</span>
            <br />
            <button>Comprar</button>
        </div>
    )
}


