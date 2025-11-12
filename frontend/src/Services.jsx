import React, { useState } from "react";
import "./Services.css";

export default function Services() {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: "⚙️",
      title: "Automatizaciones Inteligentes con n8n y Open Source",
      description: "Optimizamos procesos clave mediante automatizaciones personalizadas, integrando herramientas como n8n, Google Sheets, Forms, Gmail, Drive, y más.",
      features: [
        "Automatización de reportes, alertas y aprobaciones",
        "Integración de formularios con tableros y CRM",
        "Flujos de onboarding, seguimiento y feedback",
        "Soluciones sin código, escalables y mantenibles"
      ],
      quote: "Automatizar no es reemplazar personas, es potenciar su impacto."
    },
    {
      id: 2,
      icon: "🤖",
      title: "Asistentes Conversacionales y Agentes IA",
      description: "Creamos bots y agentes inteligentes que entienden, responden y aprenden. Desde atención al cliente hasta soporte interno.",
      features: [
        "Bots para WhatsApp, web y canales internos",
        "Agentes conectados a bases de datos, formularios y flujos",
        "Integración con herramientas como LLMs, n8n, etc.",
        "Capacitación para equipos en uso y mejora continua"
      ],
      quote: ""
    },
    {
      id: 3,
      icon: "📚",
      title: "Mentorías de Onboarding en IA y Automatización",
      description: "Acompañamos a equipos y líderes en su primer paso hacia la inteligencia artificial aplicada.",
      features: [
        "Introducción a IA, agentes y automatización",
        "Casos de uso adaptados a tu negocio",
        "Diseño de roadmap de adopción tecnológica",
        "Activación de pilotos con herramientas accesibles"
      ],
      quote: ""
    },
    {
      id: 4,
      icon: "🔧",
      title: "Soluciones Digitales con Herramientas Open Source",
      description: "Analizamos tu flujo operativo y te ayudamos a elegir la combinación de herramientas que mejor se adapta a tu contexto.",
      features: [
        "Formularios inteligentes y tableros automáticos",
        "Sistemas de seguimiento, control y trazabilidad",
        "Dashboards ejecutivos conectados a fuentes vivas",
        "Capacitación para uso autónomo y sostenible"
      ],
      quote: ""
    },
    {
      id: 5,
      icon: "☁️",
      title: "Servicios Cloud y Plataformas SaaS",
      description: "Te ayudamos a elegir, configurar y escalar servicios en la nube que acompañen tu crecimiento.",
      features: [
        "Venta y configuración de servicios SaaS",
        "Gestión de dominios, DNS y correos corporativos",
        "Seguridad, respaldo y continuidad operativa",
        "Optimización de costos y performance"
      ],
      quote: "La nube no tiene por qué ser un gasto impredecible. Te ayudamos a convertirla en una inversión estratégica."
    },
    {
      id: 6,
      icon: "🧠",
      title: "Inteligencia Artificial Aplicada y Desarrollo de Modelos",
      description: "Impulsamos la transformación digital mediante el diseño, desarrollo e implementación de soluciones basadas en IA.",
      features: [
        "Desarrollo de modelos de Deep Learning, Machine Learning y NLP",
        "Prompt Engineering para asistentes y bots",
        "Data Engineering y preparación de datos",
        "Google Advanced Analytics y visualización de datos"
      ],
      quote: "No vendemos modelos genéricos. Diseñamos inteligencia que entiende tu negocio."
    }
  ];

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="section-title">🧠 Catálogo de Soluciones y Servicios</h2>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className={`service-card ${expandedService === service.id ? 'expanded' : ''}`}>
              <div className="service-header" onClick={() => toggleService(service.id)}>
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <span className="expand-icon">{expandedService === service.id ? '−' : '+'}</span>
              </div>
              
              <p className="service-description">{service.description}</p>
              
              {expandedService === service.id && (
                <div className="service-expanded">
                  <ul className="service-features">
                    {service.features.map((feature, index) => (
                      <li key={index} className="feature-item">{feature}</li>
                    ))}
                  </ul>
                  {service.quote && (
                    <p className="service-quote">"{service.quote}"</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="services-cta">
          <a href="#team" className="cta-button">Conocé cómo trabajamos</a>
        </div>
      </div>
    </section>
  );
}