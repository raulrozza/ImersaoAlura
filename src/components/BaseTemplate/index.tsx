import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

// Components
import Menu from '../Menu';
import Footer from '../Footer';

// Styles
import { Main } from './styles';

interface IProps {
    title: string;
    children: React.ReactNode;
}

const BaseTemplate: React.FC<IProps> = ({ title, children }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Menu />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};

BaseTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default BaseTemplate;
