import React from 'react';

function Footer() {
  const primaryColor = '#001F3F'; // Azul Marinho

  return (
    <footer style={{ 
      backgroundColor: primaryColor, 
      color: '#FFFFFF', 
      padding: '30px 20px', 
      textAlign: 'center', 
      marginTop: '50px',
      borderTop: '5px solid #A00000' // Detalhe Vermelho Rubro
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ margin: '0 0 10px 0', fontSize: '1.1em' }}>
          © {new Date().getFullYear()} Seu Nome | Desenvolvedor Software.
        </p>
        <p style={{ fontSize: '0.9em', margin: 0 }}>
          Informações Adicionais: Disponibilidade Imediata | Foco em soluções de alta performance | 
          <a href="LINK_DO_LINKEDIN" target="_blank" rel="noopener noreferrer" style={{ color: '#FFD700', textDecoration: 'none', marginLeft: '5px' }}>
            Meu LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;