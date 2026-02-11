import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
    /* Sin browserRouter no pueden usar React Router */
    <BrowserRouter>
        <App />
    </BrowserRouter>
 

)
