import CardPaletteColor from '../CardPaletteColor/CardPaletteColor'
import './CardPaletteColorsList.css'

import React from 'react'

const CardPaletteColorsList = ({colors}) => {
    return (
        <div className='card-palette__colors'>
            {
                colors.map(
                    (color) => <CardPaletteColor key={color} color={color} />
                )
            }
        </div>
    )
}

export default CardPaletteColorsList