import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {HashRouter} from 'react-router-dom'
import StoreContextProvider from './context/storeContext.jsx'

createRoot(document.getElementById('root')).render(

    <HashRouter>
        <StoreContextProvider>
            <App />
        </StoreContextProvider>
    </HashRouter>

)
