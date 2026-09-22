import { useState } from 'react';
import './App.css';

function App() {
  const [activeScreen, setActiveScreen] = useState('home');

  return (
    <div className="App">
      <header className="topbar">
        <button className="brand" onClick={() => setActiveScreen('home')}>
          <span className="brand-mark">D</span>
          <span>Daniel CV</span>
        </button>
        <nav className="navigation" aria-label="Navegación principal">
          <button className={activeScreen === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveScreen('home')}>Inicio</button>
          <button className={activeScreen === 'journey' ? 'nav-link active' : 'nav-link'} onClick={() => setActiveScreen('journey')}>Trayectoria</button>
        </nav>
        <a className="contact-button" href="mailto:daniel@example.com">Hablemos <span aria-hidden="true">↗</span></a>
      </header>

      <main>
        {activeScreen === 'home' ? (
          <section className="hero screen-enter" aria-labelledby="home-title">
            <div className="hero-copy">
              <p className="eyebrow">Diseño · Desarrollo · Producto</p>
              <h1 id="home-title">Construyo experiencias digitales <em>con intención.</em></h1>
              <p className="intro">Soy Daniel, desarrollador frontend enfocado en convertir ideas complejas en productos claros, útiles y agradables de usar.</p>
              <div className="hero-actions">
                <button className="primary-button" onClick={() => setActiveScreen('journey')}>Ver mi trayectoria <span aria-hidden="true">↓</span></button>
                <a className="text-link" href="mailto:daniel@example.com">Escribirme <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="hero-aside" aria-label="Resumen profesional">
              <div className="portrait-placeholder">D<span>+</span></div>
              <div className="availability"><span className="status-dot" /> Disponible para proyectos</div>
              <p>Actualmente creando interfaces que hacen que la tecnología se sienta más humana.</p>
            </div>
          </section>
        ) : (
          <section className="journey screen-enter" aria-labelledby="journey-title">
            <div className="section-heading">
              <p className="eyebrow">El recorrido</p>
              <h1 id="journey-title">Una mirada a mi <em>trayectoria.</em></h1>
              <p className="intro">Cada proyecto ha sido una oportunidad para aprender, simplificar y dejar algo mejor de lo que estaba.</p>
            </div>
            <div className="timeline">
              <article className="timeline-item featured">
                <span className="timeline-year">2024 — Hoy</span>
                <div><h2>Frontend Developer · Freelance</h2><p>Diseño y desarrollo de productos web para equipos que buscan claridad, velocidad y una experiencia memorable.</p><div className="tag-row"><span>React</span><span>JavaScript</span><span>UX/UI</span></div></div>
              </article>
              <article className="timeline-item">
                <span className="timeline-year">2022 — 2024</span>
                <div><h2>Desarrollador web · Proyectos digitales</h2><p>Creación de sitios y herramientas internas, desde el concepto inicial hasta su puesta en producción.</p></div>
              </article>
              <article className="timeline-item">
                <span className="timeline-year">Antes</span>
                <div><h2>El comienzo 2</h2><p>Curiosidad, muchos experimentos y la decisión de convertir esa curiosidad en una profesión.</p></div>
              </article>
            </div>
          </section>
        )}
      </main>
      <footer><span>© 2026 Daniel</span><span>Hecho con curiosidad y código.</span></footer>
    </div>
  );
}

export default App;
