// Exemplo de Header.jsx
import React from 'react';

const Header = () => {
    const primaryColor = '#001F3F'; // Azul Marinho
    const accentColor = '#A00000'; // Vermelho Rubro

    return (
        <header style={{ 
            backgroundColor: primaryColor, 
            color: '#FFFFFF', 
            padding: '15px 40px', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            position: 'sticky', // Fixo no topo
            top: 0,
            zIndex: 50 
        }}>
            <h1 style={{ margin: 0, fontSize: '1.8em', color: accentColor }}>Henrique</h1>
            <nav>
                <a href="#sobre" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 15px', fontWeight: 'bold' }}>Sobre</a>
                <a href="#portfolio" style={{ color: '#FFFFFF', textDecoration: 'none', margin: '0 15px', fontWeight: 'bold' }}>Portfólio</a>
            </nav>
        </header>
    );
};

export default Header;