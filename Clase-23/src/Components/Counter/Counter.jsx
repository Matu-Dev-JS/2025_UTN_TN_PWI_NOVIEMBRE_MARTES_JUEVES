import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)


    /* 
    Cuando quiero actualizar el valor actual del estado la forma correcta es usar una callback en el setter
    A mi setter le puedo pasar una callback, y el valor que retorne esta callback sera el nuevo valor de mi estado
    */
    function increment (){
        setCounter(
            function (currentCounter){ 
                return currentCounter + 1
            } 
        )
    }

    const decrement = () => {
        setCounter(
            function (currentCounter){ 
                return currentCounter - 1
            } 
        )
    }

    /* 
    Contador debe empezar en 1
    Que al llegar a 10 no se pueda sumar y diga por pantalla 'Has llegado al limite' y desaparezca el boton de +
    Que al llegar a 0 no se pueda restar y diga por pantalla 'No puedes seleccionar menos 1' y desaparezca el boton de -
    */

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{counter}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default Counter

