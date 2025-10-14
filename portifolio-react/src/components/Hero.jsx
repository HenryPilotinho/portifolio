import React from 'react';
import perfil from '../assets/perfil.jpg';
const dadosPessoais = {
  // ... (Dados inalterados) ...
  nome: "Henrique Silva Sena",
  github: "https://github.com/HenryPilotinho",
  faculdade: "Fatec Zona Leste",
  curso: "Desenvolvimento de software Multiplataforma",
  inicio: "02/2023",
  conclusao: "Previsão: 06/2026",
  extensao: [
    { nome: "React Avançado", local: "Online", instituicao: "Udemy", horas: 60, data: "01/2024 - 03/2024" },
    { nome: "Cloud Digital Leader", local: "Online", instituicao: "Google Cloud", horas: 40, data: "06/2023" },
  ],
  linguagens: [
    { lingua: "Português", nivel: "Nativo" },
    { lingua: "Inglês", nivel: "Médio" },
    { lingua: "Espanhol", nivel: "Básico" },
    { lingua: "japonês", nivel: "Básico" },
  ],
};

function Hero() {
  const primaryColor = '#001F3F'; // Azul Marinho
  const accentColor = '#A00000'; // Vermelho Rubro
  const horizontalPadding = '5%'; // Define um padding lateral consistente

  return (
    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      width: '100%', // Usa 100% da largura da tela
      padding: `50px ${horizontalPadding}`, // Padding lateral
      backgroundColor: '#00000110', 
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)'
    }}>
      {/* Coluna da Foto (Esquerda) */}
      <div style={{ 
        flex: '0 0 250px', // Largura fixa para a foto, para evitar que estique
        paddingRight: '40px',
        textAlign: 'center'
      }}>
        <img 
          src={perfil}
          alt="Foto de Identificação"
          style={{ 
            width: '250px', 
            height: '250px', 
            borderRadius: '50%', 
            objectFit: 'cover', 
            border: `5px solid ${accentColor}`,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
          }}
        />
      </div>

      {/* Coluna das Informações (Direita) */}
      <div style={{ flex: '1 1 500px', minWidth: '300px' }}> {/* Usa o espaço restante */}
        <h1 style={{ color: primaryColor, borderBottom: `3px solid ${accentColor}`, paddingBottom: '15px', marginBottom: '25px', fontSize: '2.2em' }}>
          {dadosPessoais.nome}
        </h1>
        {/* ... (Resto do currículo inalterado) ... */}
        <p>
          <strong>GitHub:</strong> 
          <a href={dadosPessoais.github} target="_blank" rel="noopener noreferrer" style={{ color: accentColor, textDecoration: 'none', marginLeft: '5px', fontWeight: 'bold' }}>
            {dadosPessoais.github}
          </a>
        </p>

        <h3 style={{ color: primaryColor, marginTop: '25px', marginBottom: '10px' }}>Formação Acadêmica</h3>
        <p>
          {dadosPessoais.curso}<br />
          {dadosPessoais.faculdade} | {dadosPessoais.inicio} - {dadosPessoais.conclusao}
        </p>
        
        <h3 style={{ color: primaryColor, marginTop: '25px', marginBottom: '10px' }}>Cursos de Extensão</h3>
        {dadosPessoais.extensao.map((curso, index) => (
          <div key={index} style={{ marginBottom: '15px', borderLeft: `3px solid ${primaryColor}`, paddingLeft: '10px' }}>
            <strong>{curso.nome}</strong> ({curso.horas}h)<br />
            Instituição: {curso.instituicao} | Local: {curso.local}<br />
            Período: {curso.data}
          </div>
        ))}

        <h3 style={{ color: primaryColor, marginTop: '25px', marginBottom: '10px' }}>Línguas</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {dadosPessoais.linguagens.map((lang, index) => (
            <li key={index} style={{ marginBottom: '5px' }}>
              <strong>{lang.lingua}:</strong> <span style={{ color: accentColor, fontWeight: 'bold' }}>{lang.nivel}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Hero;