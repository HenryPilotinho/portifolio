import React, { useState } from 'react';



const projetosData = [
  // 6 projetos (os dados permanecem os mesmos)
  { id: 1, titulo: "Amigos Do Bairro", imagem: "/src/assets/Amigos.jpg", tecnologias: ["HTML", "CSS", "JavaScript"], descricao: "Página expositiva de um coletivo da cidade de São Paulo", github: "https://github.com/HenryPilotinho/Amigos-do-bairro", youtube: "https://amigos-do-bairro.vercel.app" },
  { id: 2, titulo: "Street Wise V1", imagem: "/src/assets/SWV1.jpg", tecnologias: ["React Native", "Expo", "SQLite"], descricao: "Aplicativo móvel para gerenciamento de notas com sincronização offline e autenticação.", github: "link_github_2", youtube: null },
  { id: 3, titulo: "Street Wise/ Ink-dash", imagem: "/src/assets/Ink.jpg", tecnologias: ["React", "D3.js", "Context API"], descricao: "Painel de controle interativo para visualização de dados financeiros em tempo real.", github: "link_github_3", youtube: "link_youtube_3" },
  { id: 4, titulo: "Geo-so app", imagem: "/src/assets/proj4.jpg", tecnologias: ["Gatsby", "GraphQL", "Tailwind CSS"], descricao: "Website estático e ultra-rápido, otimizado para SEO e conversão.", github: "link_github_4", youtube: null },
  { id: 5, titulo: "Rungo-app", imagem: "/src/assets/proj5.jpg", tecnologias: ["Python", "Django", "PostgreSQL"], descricao: "Sistema de votação online com segurança e auditoria de votos.", github: "link_github_5", youtube: "link_youtube_5" },
  
];

const primaryColor = '#001F3F'; // Azul Marinho
const accentColor = '#A00000'; // Vermelho Rubro

// Componente para o Modal/Card Flutuante (INALETRADO, mantido para os detalhes)
const ProjetoModal = ({ projeto, onClose }) => {
  if (!projeto) return null;

  // Estilos do Modal (mantidos)
  // ... (Estilos e conteúdo do modal omitidos por brevidade, mas devem ser mantidos)

  return (
    <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
        display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000,
      }}>
      <div style={{
          backgroundColor: '#FFFFFF', padding: '30px', borderRadius: '10px', 
          width: '90%', maxWidth: '650px', position: 'relative', 
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
          borderTop: `8px solid ${accentColor}`,
        }}>
        <button onClick={onClose} style={{
            position: 'absolute', top: '15px', right: '15px', 
            border: 'none', borderRadius: '50%', width: '35px', height: '35px', 
            backgroundColor: accentColor, color: '#FFFFFF', cursor: 'pointer', 
            fontWeight: 'bold', fontSize: '1em',
          }}>X</button>
        <h2 style={{ color: primaryColor, marginBottom: '15px', borderBottom: `1px solid ${primaryColor}`, paddingBottom: '10px' }}>
          {projeto.titulo}
        </h2>
        <p style={{ color: '#333', marginBottom: '25px', lineHeight: '1.6' }}>{projeto.descricao}</p>
        
        <h4 style={{ color: primaryColor, marginBottom: '10px' }}>Tecnologias Utilizadas</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '30px' }}>
          {projeto.tecnologias.map((tech, index) => (
            <span 
              key={index} 
              style={{ 
                backgroundColor: primaryColor, 
                color: '#FFFFFF', 
                padding: '6px 12px', 
                borderRadius: '20px', 
                fontSize: '0.9em' 
              }}>
              {tech}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-start' }}>
          <a href={projeto.github} target="_blank" rel="noopener noreferrer" 
             style={{ padding: '10px 20px', borderRadius: '5px', color: '#FFFFFF', textDecoration: 'none', fontWeight: 'bold', textAlign: 'center', backgroundColor: accentColor }}>
            Ver no GitHub
          </a>
          {projeto.youtube && (
            <a href={projeto.youtube} target="_blank" rel="noopener noreferrer" 
               style={{ padding: '10px 20px', borderRadius: '5px', color: '#FFFFFF', textDecoration: 'none', fontWeight: 'bold', textAlign: 'center', backgroundColor: primaryColor }}>
              Ver Demo (YouTube)
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


function Projetos() {
  const [selectedProject, setSelectedProject] = useState(null);
  const horizontalPadding = '5%'; 

  const handleCardClick = (projeto) => {
    setSelectedProject(projeto);
  };
  
  const cardContentStyle = {
    backgroundColor: '#FFFFFF',
    border: `1px solid #DDDDDD`,
    borderRadius: '10px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s',
    height: '100%',
  }

  // Estilo da Grade (CSS Grid)
  const gridContainerStyle = {
    display: 'grid',
    // 2 colunas de largura igual para telas médias/grandes
    gridTemplateColumns: 'repeat(2, 1fr)', 
    gap: '30px',
    padding: '20px 0',
  };

  
  return (
    <div style={{ width: '100%', padding: `0 ${horizontalPadding}` }}> 
      
      {/* Grade de Cards de Projeto */}
      <div style={gridContainerStyle}>
        {projetosData.map((projeto) => (
          <div 
            key={projeto.id} 
            onClick={() => handleCardClick(projeto)} 
            style={cardContentStyle}
          >
            <img 
              src={projeto.imagem} 
              alt={projeto.titulo} 
              style={{ width: '100%', height: '220px', objectFit: 'cover', borderBottom: `4px solid ${accentColor}` }} 
            />
            <div style={{ padding: '15px', textAlign: 'center' }}>
              <h3 style={{ color: primaryColor, margin: 0, fontSize: '1.4em' }}>{projeto.titulo}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Flutuante de Detalhes */}
      <ProjetoModal 
        projeto={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

export default Projetos;