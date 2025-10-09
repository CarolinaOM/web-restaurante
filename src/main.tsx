import React, { StrictMode } from 'react' // <-- CAMBIO AQUÍ
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)