import React from 'react'
import { Link } from 'react-router'

export default function ErrorNotFoundScreen() {
  return (
    <div>
        <h1>Ups, página no encontrada</h1>
        <p>La página que estás buscando no existe o ha sido movida.</p>
        <Link to="/">Volver al inicio</Link>
    </div>
  )
}
