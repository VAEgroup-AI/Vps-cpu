
// Importa los módulos necesarios de React Router para manejo de rutas
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importa el hook useState para manejar estado local
import { useState } from 'react';

// Importa los componentes principales de la interfaz
import Navbar from './Navbar';
import HeroSection from './HeroSection';

// Importa el componente que interactúa con el backend
import BackendHello from './BackendHello';


// Componente para la ruta de pruebas, incluye un contador y un enlace de regreso
function Pruebas() {
  
  // Estado local para el contador
  const [count, setCount] = useState(0);
  
  return (
    <div className="app-bg">
      
      {/* Barra de navegación reutilizable */}
      <Navbar />
      
      {/* Sección principal de la zona de pruebas */}
      <div className="hero-section" style={{marginTop:'2rem', padding:'2.5rem 0'}}>
        <h1 className="hero-title">Zona de Pruebas</h1>
        
        {/* Botón que incrementa el contador */}
        <div style={{ margin: '1.2rem 0' }}>
          <button onClick={() => setCount(count + 1)} className="hero-button">
            count is {count}
          </button>
        </div>
        
        {/* Componente que muestra respuesta del backend */}
        <BackendHello />
        
        {/* Enlace para volver a la página principal */}
        <p style={{ marginTop: '2rem' }}>
          <Link to="/" className="hero-button">Volver a la landing</Link>
        </p>

      </div>
    </div>
  );
}

// Componente principal de la aplicación, define las rutas y carga los componentes principales
function App() {
  return (
    
    // Router envuelve toda la app para habilitar navegación por rutas
    <Router>
      <Routes>
        
        {/* Ruta principal (landing page) */}
        <Route path="/" element = {
          
          <div className="app-bg">
            {/* Barra de navegación superior */}
            <Navbar />
            
            {/* Sección principal de la landing */}
            <HeroSection />
            
            {/* Contenedor con fondo y botón para ir a la zona de pruebas */}
            <div style={{marginTop:'2rem', textAlign:'center'}}>
              
              <span style={{
                display       : 'inline-block',
                background    : 'linear-gradient(135deg, #0077b6 0%, #00b4d8 100%)',
                borderRadius  : '2rem',
                boxShadow     : '0 2px 12px 0 rgba(0,119,182,0.10)',
                padding       : '0.5rem 1.5rem'
              }}>

                {/* Enlace a la ruta de pruebas */}
                <Link to="/pruebas" className="hero-button" style={{margin:0}}>
                  Ir a zona de pruebas
                </Link>
              </span>
            
            </div>
          
          </div>
        } />

        {/* Ruta para la zona de pruebas */}
        <Route path="/pruebas" element={<Pruebas />} />
      
      </Routes>
    </Router>
  );
}

export default App
