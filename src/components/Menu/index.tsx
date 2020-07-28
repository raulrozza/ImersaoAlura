import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import logo from '../../assets/img/logo.png';

// Components
import Button from './Button';

import './styles.css';

const Menu: React.FC = () => {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={logo} alt="Rozzaflix" />
            </Link>
            <Button as={Link} to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
};

export default Menu;
