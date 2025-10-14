import React, { useState } from 'react';
import amigos from '../assets/Amigos.jpg';
import amigos2 from '../assets/Amigos2.jpg';
import amigos3 from '../assets/Amigos3.jpg';
import amigos4 from '../assets/Amigos4.jpg';
import swv1 from '../assets/SWV1.jpg';
import swv12 from '../assets/SWV12.jpg';
import swv13 from '../assets/SWV13.jpg';
import swv14 from '../assets/SWV14.jpg';
import ink from '../assets/Ink.jpg';
import ink2 from '../assets/INK2.jpg';
import ink3 from '../assets/INK3.jpg';
import geo1 from '../assets/geo1.png';
import geo3 from '../assets/geo3.png';
import geo4 from '../assets/geo4.png';
import rungo1 from '../assets/rungo1.jpg';





const primaryColor = '#001F3F'; // Azul Marinho
const accentColor = '#A00000'; // Vermelho Rubro

const projetosData = [
  // 6 projetos (os dados permanecem os mesmos)
  { 
    id: 1, 
    titulo: "Amigos Do Bairro", 
    imagem: "/src/assets/Amigos.jpg", 
    tecnologias: ["HTML", "CSS", "JavaScript"], 
    descricao: "Página expositiva de um coletivo da cidade de São Paulo.", 
    github: "https://github.com/HenryPilotinho/Amigos-do-bairro", 
    Ativo: "https://amigos-do-bairro.vercel.app",
    // NOVO CAMPO: GALERIA DE IMAGENS
    galeria: [
        "/src/assets/Amigos2.jpg", 
        "/src/assets/Amigos3.jpg", 
        "/src/assets/Amigos4.jpg",
    ],
  },
  { 
    id: 2, 
    titulo: "Street Wise V1", 
    imagem: "/src/assets/SWV1.jpg", 
    tecnologias: ["Node js", "JavaScript"], 
    descricao: "Sistema de gerenciamento para um estudio de tatuagem.", 
    github: "https://github.com/HenryPilotinho/tattoo-service-nodejs", 
    galeria: [
        "/src/assets/SWV12.jpg", 
        "/src/assets/SWV13.jpg",
        "/src/assets/SWV14.jpg",
    ],
  },
  { 
    id: 3, 
    titulo: "Street Wise/ Ink-dash", 
    imagem: "/src/assets/Ink.jpg", 
    tecnologias: ["Python", "JavaScript", "MongoDB"], 
    descricao: "Segunda versão do sistema de gerenciamento para um estudio de tatuagem. Tecnologias diferentes e um foco maior na usabilidade e desempenho do sistema.", 
    github: "https://github.com/TechWeavers/PI-StreetWise-ERP-3Semestre", 
    galeria: [
        "/src/assets/INK2.jpg", 
        "/src/assets/INK3.jpg",
    ],
  },
  { 
    id: 4, 
    titulo: "Geo-so app", 
    imagem: "/src/assets/geo1.png", 
    tecnologias: ["React", "JavaScript", "Spring Boot"], 
    descricao: "Aplicação web para uma empresa de consultoria em limpeza urbana", 
    github: "https://github.com/GreeeenDevs/geoso-app", 
    galeria: [
        "/src/assets/geo3.png",
        "/src/assets/geo4.png",
    ], 
  },
  { 
    id: 5, 
    titulo: "Rungo-app", 
    imagem: "/src/assets/rungo1.jpg", 
    tecnologias: ["React Native", "FireBase", "Node js"], 
    descricao: "Aplicativo de bichinho virtual para gameficação de atividades fisícas",
    github: "https://github.com/GreeeenDevs/rungo-app", 
    youtube: "https://www.youtube.com/shorts/d7CnZjd0z44",
    
    galeria: [
        
    ],
  },
  
];


// Componente para o Modal/Card Flutuante (MODIFICADO)
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
          width: '90%', 
          maxWidth: '850px', // <<< Aumentado para caber a galeria
          position: 'relative', 
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
          borderTop: `8px solid ${accentColor}`,
          maxHeight: '90vh', // Para garantir que caiba na tela
          overflowY: 'auto', // Adiciona scroll se o modal for maior que a tela
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
        
        {/* ======================================= */}
        {/* NOVO BLOCO: GALERIA DE FOTOS DO PROJETO */}
        {/* ======================================= */}
        {projeto.galeria && projeto.galeria.length > 0 && (
          <div style={{ 
              display: 'flex', 
              overflowX: 'auto', // Permite rolagem horizontal
              gap: '15px', 
              paddingBottom: '15px', 
              marginBottom: '25px',
              borderBottom: `1px solid #DDD` 
          }}>
            {projeto.galeria.map((url, index) => (
              <img 
                key={index} 
                src={url} 
                alt={`${projeto.titulo} - Captura ${index + 1}`} 
                style={{ 
                  flexShrink: 0, // Impede que a imagem encolha
                  width: '600px', // Largura fixa para a visualização
                  height: 'auto', 
                  borderRadius: '5px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                }} 
              />
            ))}
          </div>
        )}
        
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
          {projeto.Ativo && (
            <a href={projeto.Ativo} target="_blank" rel="noopener noreferrer" 
               style={{ padding: '10px 20px', borderRadius: '5px', color: '#FFFFFF', textDecoration: 'none', fontWeight: 'bold', textAlign: 'center', backgroundColor: primaryColor }}>
              Ir para o Site
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