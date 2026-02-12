import React from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'


function App() {


    return (
        <div>
            <Routes>
                <Route
                    path='/'
                    element={
                        <HomeScreen />
                    }
                />
                <Route
                    path='/contact/:contact_id'
                    element={
                        <ContactScreen />
                    }
                />
            </Routes>
        </div>
    )
}

export default App
