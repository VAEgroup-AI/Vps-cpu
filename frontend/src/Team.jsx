import React from "react";
import "./Team.css";

export default function Team() {
  const whyWorkWithUs = [
    "Transparencia: te mostramos cómo, cuánto y por qué.",
    "Cercanía: entendemos tu contexto y hablamos tu idioma.",
    "Evolución continua: te ayudamos a crecer, no a depender.",
    "Simplicidad con propósito: soluciones que funcionan, sin complejidad innecesaria.",
    "Autonomía: dejamos capacidades instaladas, no cajas negras.",
    "Rigor técnico: aplicamos lo último en IA, datos y automatización.",
    "Impacto medible: cada solución tiene un antes y un después."
  ];

  return (
    <section className="team-section" id="team">
      <div className="team-container">
        <h2 className="section-title">🤝 Nuestro Equipo</h2>
        
        <div className="team-content">
          {/* Izquierda - Descripción del equipo */}
          <div className="team-description">
            <p>
              Somos un equipo multidisciplinario con más de 20 años de experiencia combinada en ingeniería, análisis de datos, gestión de proyectos y transformación digital.
            </p>
            
            <p>
              Nos une un propósito común: <strong>ayudar a las organizaciones a evolucionar</strong>, integrando tecnología, inteligencia artificial y procesos humanos que generan impacto real.
            </p>
            
            <p>
              Diseñamos soluciones inteligentes con una mirada práctica y estratégica, y acompañamos a cada cliente en la selección, implementación y sostenimiento de herramientas que fortalecen su operación.
            </p>
            
            <p>
              <strong>No solo aplicamos tecnología: la conectamos con las personas, los datos y los objetivos de negocio.</strong>
            </p>
            
            <div className="team-quote">
              <p><em>"Transformar no es solo digitalizar. Es activar capacidades que perduran."</em></p>
            </div>
          </div>

          {/* Derecha - Por qué trabajar con nosotros */}
          <div className="why-work-with-us">
            <h3 className="why-title">¿Por qué trabajar con nosotros?</h3>
            
            <p className="why-intro">
              Porque no solo ofrecemos tecnología:<br />
              <strong>ofrecemos acompañamiento, claridad y resultados.</strong>
            </p>

            <h4 className="values-subtitle">Nuestros valores guían cada proyecto:</h4>
            
            <ul className="why-list">
              {whyWorkWithUs.map((item, index) => (
                <li key={index} className="why-item">{item}</li>
              ))}
            </ul>

            <div className="why-quote">
              <p><em>"No venimos a venderte tecnología. Venimos a ayudarte a evolucionar con ella."</em></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}