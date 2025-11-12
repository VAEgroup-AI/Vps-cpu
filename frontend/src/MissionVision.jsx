import React from "react";
import "./MissionVision.css";

export default function MissionVision() {
  const values = [
    { icon: "🧭", title: "Transparencia", description: "Decimos lo que hacemos y hacemos lo que decimos." },
    { icon: "🤝", title: "Cercanía", description: "Nos vinculamos desde la escucha, la empatía y la colaboración." },
    { icon: "🔁", title: "Evolución continua", description: "Aprendemos, mejoramos y nos adaptamos junto a vos." },
    { icon: "✨", title: "Simplicidad con propósito", description: "Lo simple es lo que funciona, escala y se sostiene." },
    { icon: "🚀", title: "Autonomía y empoderamiento", description: "Creamos capacidades que perduran más allá del proyecto." },
    { icon: "🧠", title: "Rigor técnico y mirada humana", description: "Combinamos ingeniería, estrategia y sensibilidad." },
    { icon: "📊", title: "Impacto medible y duradero", description: "Lo que hacemos transforma procesos y deja huella." }
  ];

  return (
    <section className="mission-vision-section">
      <div className="mv-container">
        
        {/* Misión */}
        <div className="mission-card">
          <h2 className="mv-title">
            🎯 Misión
          </h2>
          <p className="mv-description">
            Acompañamos a organizaciones y equipos en su evolución digital, combinando tecnología, automatización e inteligencia artificial con una mirada humana, práctica y estratégica.
          </p>
          <p className="mv-description">
            Diseñamos soluciones accesibles, sostenibles y personalizadas, priorizando siempre la <strong>transparencia</strong>, la <strong>confianza</strong> y el <strong>crecimiento compartido</strong>.
          </p>
        </div>

        {/* Visión */}
        <div className="vision-card">
          <h2 className="mv-title">
            🌟 Visión
          </h2>
          <p className="mv-description">
            Ser referentes en la transformación digital con propósito en América Latina, impulsando negocios más eficientes, humanos y escalables.
          </p>
          <p className="mv-description">
            Queremos que cada cliente sienta que <strong>no solo resolvemos problemas técnicos</strong>, sino que <strong>construimos relaciones de largo plazo</strong>, basadas en la cercanía, la claridad y el impacto real.
          </p>
        </div>

        {/* Valores */}
        <div className="values-section">
          <h3 className="values-title">🎨 Nuestros Valores</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}