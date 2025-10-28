
// Importa StrictMode para ayudar a identificar problemas potenciales en la app
import { StrictMode } from 'react'

// Importa createRoot para crear el punto de entrada de la app en el DOM
import { createRoot } from 'react-dom/client'

// Importa los estilos globales
import './index.css'

// Importa el componente principal de la aplicación
import App from './App.jsx'


// Renderiza la aplicación React dentro del elemento con id 'root'
createRoot(document.getElementById('root')).render(
  // StrictMode activa comprobaciones y advertencias adicionales en desarrollo
  <StrictMode>

    {/* Componente principal de la app */}
    <App />
  
  </StrictMode>,
)
