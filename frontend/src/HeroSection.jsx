import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <h1 className="hero-title">
        Transformamos Datos,<br />
        Procesos y Negocios con<br />
        IA
      </h1>
      <p className="hero-subtitle">
        Somos un equipo de ingenieros, analistas y project managers dedicados a impulsar la transformación digital de tu empresa. Combinamos estrategia, tecnología y creatividad para diseñar soluciones inteligentes.
      </p>
      <a href="#contact" className="hero-button">Descubrí cómo podemos ayudarte</a>
    </section>
  );
}
