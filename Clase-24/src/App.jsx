import React from 'react'
import './mapeo'
import ProductCard from './ProductCard/ProductCard'


function App() {
	/* 
	Listas en react
	JSX nos permite crear listas de elementos
	*/

	const titulo = <h1>Hola</h1>

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



	/*  function generateProductListJSX (productos){
	   const productos_JSX = []
	   for(const producto of productos){
		 productos_JSX.push(
		   <div key={producto.id}>
			 <h2>{producto.title}</h2>
			 <span>Precio: ${producto.precio} USD</span>
			 <br />
			 <button>Comprar</button>
		   </div>
		 )
	   }
	   return productos_JSX
	 }
   
	 const productos_JSX = generateProductListJSX(productos_servidor) */

	/*   const productos_JSX = [
		<div>
		  <h2>Tv samsung 42"</h2>
		  <span>Precio: $2000 USD</span>
		  <br />
		  <button>Comprar</button>
		</div>
		,
		<div>
		  <h2>Tv samsung 50"</h2>
		  <span>Precio: $4000 USD</span>
		  <br />
		  <button>Comprar</button>
		</div>
		,
		<div>
		  <h2>Tv samsung 72"</h2>
		  <span>Precio: $5000 USD</span>
		  <br />
		  <button>Comprar</button>
		</div>
	  ] */


	return (
		<div>
			{/* 
      FORMA DEFINITIVA
      */}
			{
				productos_servidor.map(
					(producto) => {
						return (
							<div key={producto.id}>
								<h2>{producto.title}</h2>
								<span>Precio: ${producto.precio} USD</span>
								<br />
								<button>Comprar</button>
							</div>
						)
					}
				)
			}

			{
				productos_servidor.map(
					(producto) => <ProductCard producto={producto} key={producto.id}/>
				)
			}
		</div>
	)
}

export default App
