import React from 'react'
import { NavLink, Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import AboutScreen from './Screens/AboutScreen/AboutScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import './global.css'
import ProductDetailScreen from './Screens/ProductDetailScreen/ProductDetailScreen'

function App() {


  return (
    <div>
      <header>
        <h2>BrandName</h2>
        <nav>
          {/* NavLink nos permite hacer redirecciones sin re-renderizar nuestra app, el ancla recarga la pagina cada vez que se usa */}
          <NavLink 
            to='/' 
          >
            Home
          </NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>

        </nav>
      </header>
      <Routes>
        
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/about' element={<AboutScreen/>}/>
        <Route path='/contact' element={<ContactScreen/>}/>
        <Route 
          path='/product/:product_id' 
          element={<ProductDetailScreen/>}
        />
      </Routes>
    </div>
  )
}

export default App
