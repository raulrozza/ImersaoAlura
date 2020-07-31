import React from 'react';
import PropTypes from 'prop-types';

import ReactLoading from 'react-loading';

import { Container } from './styles';

interface IProps {
    fullscreen?: boolean;
}

const Loading: React.FC<IProps> = ({ fullscreen = false }) => {
    return (
        <Container fullscreen={fullscreen}>
            <ReactLoading color="var(--primary)" type="spin" />
        </Container>
    );
};

Loading.propTypes = {
    fullscreen: PropTypes.bool,
};

export default Loading;
