import React from 'react'
import './random'
import {ProductCard} from './Components/ProductCard/ProductCard.jsx'

function App() {
  //Los archivos .jsx traen las expresiones JSX, que son las que se parecen a HTML
  //Las expresiones JSX son un nuevo tipo de dato, lo que significa que son transferibles
  //Las {} nos permiten interpolar en expresiones JSX con JS
  let titulo = <h1>Hola mundo</h1>
  let nombre = 'pepe'
  let apellido = 'perez'
  let isAdmin = true
  
  return (
    <div className='contenedor'>
      <div className='product-card'>
        Hola
      </div>
      {
        isAdmin
        ? <span>Role: Admin</span>
        : <span>Role: User</span>
      }
      {titulo}
      <h2>{nombre + ' ' + apellido}</h2>
      <form>
        <div>
          <label htmlFor="email"></label>
          <input id='email'/>
        </div>
      </form>
      {/* Comentario */}
      <ProductCard title='tv samsung 42"' price={1000}/> 
      <ProductCard title={'tv samsung 52"'} price={2000}/> {/* {title, price} */}
      <ProductCard title={'tv samsung 97"'} price={3000}/>
      <ProductCard title={'tv samsung 75"'} price={2500}/>
    </div>
  )
}



export default App
