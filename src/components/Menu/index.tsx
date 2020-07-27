import React from 'react';

// Assets
import logo from '../../assets/img/logo.png';

// Components
import Button from './Button';

import './styles.css';

const Menu: React.FC = () => {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt="Rozzaflix" />
            </a>
            <Button as="a" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
};

export default Menu;
