import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/vae_logo.svg" alt="VAE Logo" className="logo-img" />
        <span>VAE</span>
      </div>
      <ul className="navbar-menu">
        <li><a href="#about">Sobre Nosotros</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#team">Equipo</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}
