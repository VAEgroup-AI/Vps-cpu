import React from "react";
import "./Manifesto.css";

export default function Manifesto() {
  return (
    <section className="manifesto-section">
      <div className="manifesto-container">
        <h2 className="manifesto-title">📜 Nuestro compromiso - Manifiesto</h2>
        
        <div className="manifesto-content">
          <h3 className="manifesto-subtitle">
            Creemos en una transformación digital que no deshumaniza, sino que potencia.
          </h3>
          
          <div className="manifesto-text">
            <p>
              No venimos a imponer tecnología, venimos a <strong>construir soluciones con sentido</strong>, que se integren a tu cultura, tus procesos y tus objetivos.
            </p>
            
            <p>
              Nos mueve la <strong>transparencia</strong>, porque sabemos que la confianza se gana con hechos.
            </p>
            
            <p>
              Nos guía la <strong>cercanía</strong>, porque cada cliente es único y merece ser escuchado.
            </p>
            
            <p>
              Nos inspira la <strong>evolución</strong>, porque el cambio no es un destino, es un camino compartido.
            </p>
            
            <p>
              Y nos compromete el <strong>impacto real</strong>, porque no trabajamos para mostrar dashboards, sino para que tu negocio crezca con propósito, eficiencia y equilibrio.
            </p>
            
            <div className="manifesto-closing">
              <p><strong>Somos un equipo que combina ingeniería, estrategia y humanidad.</strong></p>
              <p><strong>Y estamos acá para ayudarte a evolucionar.</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}