import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css' // Permite personalizar a página
import App from './App.jsx' // Importa o nosso App, e tudo que colocarmos no return() irá aparecer na página principal

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
) // Para isso coloque <App /> no ReactDOM