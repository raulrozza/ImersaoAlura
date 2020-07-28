import React from 'react';
import PropTypes from 'prop-types';

import SlickSlider from 'react-slick';

import { Container } from './styles';

interface IProps {
    sliderBtnColor?: string;
    children: React.ReactNode;
}

const Slider: React.FC<IProps> = ({ sliderBtnColor, children }) => (
    <Container sliderBtnColor={sliderBtnColor}>
        <SlickSlider
            {...{
                dots: false,
                infinite: true,
                speed: 300,
                centerMode: false,
                variableWidth: true,
                adaptiveHeight: true,
            }}
        >
            {children}
        </SlickSlider>
    </Container>
);

Slider.propTypes = {
    sliderBtnColor: PropTypes.string,
    children: PropTypes.node,
};

export default Slider;
