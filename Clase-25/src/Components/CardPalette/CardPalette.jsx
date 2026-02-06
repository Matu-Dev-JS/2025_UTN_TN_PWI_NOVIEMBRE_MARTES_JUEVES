import CardPaletteColorsList from '../CardPaletteColorsList/CardPaletteColorsList'
import './CardPalette.css'
import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";

export default function CardPalette({
    id,
    likes,
    date, 
    colors
}) {
  return (
    <div className='card-palette'>
        <CardPaletteColorsList colors={colors} />
        <div className='card-palette__info'>
            <button><IoMdHeartEmpty /> {likes}</button>
            <span>{date}</span>
        </div>
    </div>
  )
}
