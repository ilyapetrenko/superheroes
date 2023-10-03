import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Gallery } from './components/Gallery/Gallery.jsx'
import { HeroInfo } from './components/HeroInfo/HeroInfo.jsx'
import { Navbar } from './components/Navbar/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/edit/:id" element={<HeroInfo/>}/>
            </Routes>
        </BrowserRouter>
    </Provider>

)
