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
    horizontalPadding?: boolean;
    children: React.ReactNode;
}

const BaseTemplate: React.FC<IProps> = ({
    title,
    horizontalPadding = true,
    children,
}) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Menu />
            <Main horizontalPadding={horizontalPadding}>{children}</Main>
            <Footer />
        </>
    );
};

BaseTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    horizontalPadding: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default BaseTemplate;
