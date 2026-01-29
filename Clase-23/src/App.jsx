import React, { useState } from 'react'

/* 
ESTADOS
HOOKS
EVENTOS
*/


function App() {

  /* 
  El estado en una aplicacion es un valor que reprensenta lo que sucede en la aplicacion:
  EJEMPLO: 
    Tenemos una calculadora que permite hacer sumas y restas
    Cuales son los estados?
    - numero_1 (number)
    - numero_2 (number)
    - operacion ('+' | '-')
  */
  /* 
  Los estados en react tienen la capacidad de re-renderizar nuestro componente al ser actualizados
  useState es un hook nativo de react que permite CREAR estados
  useState recibe un parametro que es el valor inicial del estado
  useState retorna un array con 2 valores
    - 1er valor: es el valor del estado
    - 2do valor: es la funcion de actualizacion

  REGLA DE ORO:
  Los estados son inmutables, lo que significa que NO debes reasignar o modificar de ninguna manera el estado por tu cuenta
  Para esto existe la funcion de actualizacion
  La funcion de actualizacion tiene una propiedad magica MUY IMPORTANTE, tiene la capacidad de re-renderizar mi componente
  para modificar el valor de un estado debemos hacerlo mediante la funcion de actualizacion pasando por parametro el NUEVO VALOR DEL ESTADO
  */
  const state = useState(false) // [false, function (){}]
  const estaPrendida = state[0] //accedo al primer valor del state
  const actualizarEstaPrendida = state[1] //accedo a la funcion de actualizacion

  

  function alternarLuz (){
    console.log('El usuario intento alternar la luz')
    actualizarEstaPrendida(!estaPrendida)
    console.log(estaPrendida)
  }

  console.log('El componente APP se renderizo')
  return (
    <div>
      <div>
        La luz esta:  
        {
          estaPrendida 
          ? <span>Prendida</span> 
          : <span>Apagada</span>
        }
      </div>
      <button onClick={alternarLuz}>Cambiar la luz</button>
      <DummyComponent/>
    </div>
  )
}

function DummyComponent (){
  console.log("SOy un dummycomponent")
  return <div>
    Hola
  </div>
}

export default App
