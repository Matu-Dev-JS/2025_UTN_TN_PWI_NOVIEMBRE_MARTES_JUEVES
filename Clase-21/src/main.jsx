/* 
Los archivos de .jsx son caracteristicos de React
Es como un archivo de JS pero con sintaxis nueva, nos traera el tipo de dato JSX

*/
import {sumar, multiplicar, PI} from './math.js'

console.log(multiplicar(1, PI))

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)
