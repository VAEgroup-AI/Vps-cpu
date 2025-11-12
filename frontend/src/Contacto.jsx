import React, { useState } from "react";
import Navbar from './Navbar';
import "./Contacto.css";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    tipoConsulta: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState(''); // 'success' o 'error'
  const contactoUrl = import.meta.env.VITE_BACKEND_URL + "contacto"
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      const response = await fetch(contactoUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('¡Gracias! Tu consulta ha sido enviada exitosamente. Te contactaremos pronto.');
        // Resetear formulario
        setFormData({
          nombre: '',
          email: '',
          empresa: '',
          telefono: '',
          tipoConsulta: '',
          mensaje: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.error || 'Hubo un error al enviar tu consulta. Por favor, intenta nuevamente.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('Error de conexión. Por favor, verifica tu conexión a internet e intenta nuevamente.');
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="app-bg">
      <Navbar />
    
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">Contacto</h2>
          
          <div className="contact-content">
            <div className="contact-info">
              <h3>¿Listo para evolucionar?</h3>
              <p>
                Contanos sobre tu proyecto y te ayudamos a encontrar la mejor solución para tu organización.
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>grupo.vae.app.developers@gmail.com</span>
                </div>
              </div>

              <div className="contact-note">
                <p><strong>📅 Próximamente:</strong></p>
                <ul>
                  <li>Agenda de citas online</li>
                  <li>Sistema de seguimiento de consultas</li>
                </ul>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              {submitMessage && (
                <div className={`submit-message ${submitStatus}`}>
                  {submitMessage}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="nombre">Nombre completo *</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  value={formData.nombre}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="empresa">Empresa / Organización</label>
                <input 
                  type="text" 
                  id="empresa" 
                  name="empresa" 
                  value={formData.empresa}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input 
                  type="tel" 
                  id="telefono" 
                  name="telefono" 
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="tipoConsulta">¿Qué te interesa? *</label>
                <select 
                  id="tipoConsulta" 
                  name="tipoConsulta"
                  value={formData.tipoConsulta}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona una opción</option>
                  <option value="automatizaciones">Automatizaciones Inteligentes</option>
                  <option value="asistentes-ia">Asistentes Conversacionales y IA</option>
                  <option value="mentorias">Mentorías de Onboarding en IA</option>
                  <option value="soluciones-digitales">Soluciones Digitales Open Source</option>
                  <option value="servicios-cloud">Servicios Cloud y SaaS</option>
                  <option value="ia-modelos">IA Aplicada y Desarrollo de Modelos</option>
                  <option value="consultoria">Consultoría general</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Contanos sobre tu proyecto *</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Describe tu desafío, objetivos, o qué solución estás buscando..."
                  required 
                />
              </div>

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar consulta'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacto;
