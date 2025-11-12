import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">Sobre Nosotros</h2>
        
        <div className="about-content">
          <p className="about-description">
            Somos un grupo de profesionales con trayectorias complementarias en ingeniería, tecnología, calidad, gestión y desarrollo humano.
          </p>
          
          <p className="about-description">
            Nos une un propósito común: ayudar a las organizaciones a evolucionar, optimizando procesos, potenciando a las personas y aplicando tecnología e inteligencia artificial para impulsar negocios sostenibles y escalables.
          </p>
          
          <p className="about-description">
            Integramos más de 20 años de experiencia en dirección de proyectos, automatización industrial, infraestructura IT, análisis de datos, marketing y liderazgo de equipos, aplicando enfoques prácticos que generan resultados medibles y duraderos.
          </p>
          
          <p className="about-description">
            Nuestro valor diferencial está en combinar la experiencia corporativa y técnica con una mirada humana y estratégica, promoviendo el desarrollo de equipos autónomos, capaces de sostener su propio crecimiento a lo largo del tiempo.
          </p>
          
          <p className="about-description">
            Diseñamos y desarrollamos soluciones basadas en IA, asistentes conversacionales, automatizaciones y herramientas digitales personalizadas, que fortalecen procesos, instalan capacidades que perduran y permiten a cada empresa enfocarse en lo esencial: crecer con propósito, eficiencia y equilibrio.
          </p>
        </div>
      </div>
    </section>
  );
}