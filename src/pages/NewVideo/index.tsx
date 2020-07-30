import React from 'react';

// Components
import BaseTemplate from '../../components/BaseTemplate';
import { Link } from 'react-router-dom';

const NewVideo: React.FC = () => {
    return (
        <BaseTemplate title="Cadastrar Vídeo - Rozzaflix">
            <h1>Cadastro de vídeo</h1>

            <Link to="/cadastro/categoria">Cadastrar categoria</Link>
        </BaseTemplate>
    );
};

export default NewVideo;
