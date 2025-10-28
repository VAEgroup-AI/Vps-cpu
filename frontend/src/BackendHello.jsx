// Importa el hook useState para manejar estado local
import { useState } from "react";

// Importa el logo de Flask para mostrarlo en la interfaz
import logo_flask from "./assets/Flask_logo.svg";


// Componente que consulta el backend Flask y muestra una lista de resultados
function BackendHello() {
  
  // Estado para almacenar los datos recibidos del backend
  const [data, setData] = useState([]);
  
  // Estado para mostrar errores en la consulta
  const [error, setError] = useState("");
  
  // URL del backend, obtenida de las variables de entorno de Vite
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // Función que realiza la consulta al backend
  const handleFetch = () => {
    setError("");      // Resetea el error antes de la consulta
    fetch(backendUrl)  // Realiza la petición al backend
      .then((res) => {
        
        // Si la respuesta no es exitosa, lanza un error
        if (!res.ok) throw new Error("Error en la respuesta del backend");
        return res.json();
      })
      .then((json) => {
        
        // Acepta tanto {data: [...]} como [...] directamente
        if (Array.isArray(json)) {
          setData(json);
        
        } else if (json && Array.isArray(json.data)) {
          setData(json.data);
        
        } else if (json && typeof json === 'object') {
        
          // Si es un objeto pero no tiene data, intenta convertir sus valores en array
          setData(Object.values(json));
        } else {
          setError("Formato inesperado de respuesta");
        }
      })
      // Captura y muestra cualquier error ocurrido durante la consulta
      .catch((err) => setError("Error: " + err.message));
  };

  return (
    <div style={{ textAlign: "center" }}>
      
      {/* Logo de Flask */}
      <img src={logo_flask} alt="Flask Logo" style={{ width: 100, marginBottom: 16 }} />
      
      {/* Título de la sección */}
      <h2>Consulta al backend Flask</h2>
      
      {/* Botón para realizar la consulta al backend */}
      <button onClick={handleFetch}>Obtener lista del backend</button>
      
      {/* Muestra el error si existe */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      {/* Lista de resultados obtenidos del backend */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {data.map((item, idx) => (
          <li key={idx} style={{ margin: "8px 0" }}>
            <strong>{item.nombre}</strong> — {item.puesto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BackendHello;
