import React from 'react'
import { colors_card } from './data/colorsCardData'
import CardPalette from './Components/CardPalette/CardPalette'
import './global.css'
import ColorPaletteList from './Components/ColorPaletteList/ColorPaletteList'


function App() {
	


	return (
		<div>
			<ColorPaletteList card_list={colors_card} />
		</div>
	)
}


export default App
