
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/vae_logo.svg" alt="VAE Logo" className="logo-img" />
        <a><Link to="/" className="navbar" >VAE</Link></a>
      </div>
      <ul className="navbar-menu">
  <li><a href="#about">Sobre Nosotros</a></li>
  <li><a href="#services">Servicios</a></li>
  <li><a href="#team">Equipo</a></li>
  <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}
