import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import App from './components/App.jsx'
import Game from './components/Game.jsx'
import './stylesheets/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/game' element={<Game />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
