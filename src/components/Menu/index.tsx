import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import logo from '../../assets/img/logo.png';

// Components
import Button from './Button';

import { NavBar, Logo } from './styles';

const Menu: React.FC = () => {
    return (
        <NavBar>
            <Link to="/">
                <Logo src={logo} alt="Rozzaflix" />
            </Link>
            <Button as={Link} to="/cadastro/video">
                Novo vídeo
            </Button>
        </NavBar>
    );
};

export default Menu;
