import CardPalette from '../CardPalette/CardPalette'
import './ColorPaletteList.css'
import React from 'react'

function ColorPaletteList({card_list}) {
    return (
        <div className='card-palette__list'>
            {
                card_list.map(
                    (card) => <CardPalette 
                        key={card.id} 
                        likes={card.likes} 
                        date={card.date} 
                        colors={card.colors} 
                        id={card.id}
                    />
                )
            }
        </div>
    )
}

export default ColorPaletteList