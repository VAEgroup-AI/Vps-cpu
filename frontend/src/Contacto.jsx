import React from "react";

import Navbar from './Navbar';


function Contacto() {
  return (
    <div className="app-bg">
          
          {/* Barra de navegación reutilizable */}
          <Navbar />
    
            <section style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
              <h2>Contacto</h2>
              <form>
                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="nombre">Nombre:</label>
                  <input type="text" id="nombre" name="nombre" required style={{ width: "100%" }} />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required style={{ width: "100%" }} />
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <label htmlFor="mensaje">Mensaje:</label>
                  <textarea id="mensaje" name="mensaje" required style={{ width: "100%" }} />
                </div>
                <button type="submit">Enviar</button>
              </form>
            </section>
    </div>
  );
}

export default Contacto;
