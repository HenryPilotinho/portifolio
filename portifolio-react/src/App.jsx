import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Projetos from './components/Projetos.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
// Importe seu arquivo de reset CSS se for o caso: import './index.css';

function App() {
  const bgColor = '#F4F4F4'; // Off-White
  const sectionBgColor = '#FFFFFF';

  return (
    <div style={{ backgroundColor: bgColor, minHeight: '100vh', scrollBehavior: 'smooth', width: '100%' }}>
      <Header />
      <main style={{ width: '100%' }}> {/* Garante que a main também use 100% */}
        {/* PRIMEIRA SEÇÃO: CARD DE DADOS PESSOAIS */}
        <section id="sobre">
          <Hero />
        </section>

        {/* SEGUNDA SEÇÃO: CARROSSEL DE PROJETOS */}
        <section id="portfolio" style={{ padding: '40px 0', backgroundColor: sectionBgColor, width: '100%' }}>
          <h2 style={{ 
            textAlign: 'center', 
            color: '#001F3f', 
            marginBottom: '40px',
            fontSize: '2.5em'
          }}>
            Meus Projetos
          </h2>
          <Projetos />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;