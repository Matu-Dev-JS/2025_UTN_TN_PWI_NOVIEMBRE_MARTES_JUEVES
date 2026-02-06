import './CardPaletteColor.css'

import React from 'react'

function CardPaletteColor(
    {
        color
    }
) {
    return (
        <div className='card-palette__color' style={{backgroundColor: color}}>
            <span className='card-palette__color-value'>{color}</span>
        </div>
    )
}

export default CardPaletteColor