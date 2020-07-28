import React from 'react';

// Components
import BaseTemplate from '../../components/BaseTemplate';
import Carousel from '../../components/Carousel';

// Data
import data from '../../data/data.json';

import BannerMain from '../../components/BannerMain';

const Home: React.FC = () => {
    return (
        <BaseTemplate title="Home - Rozzaflix">
            <BannerMain
                videoTitle={data.categories[0].videos[0].title}
                url={data.categories[0].videos[0].url}
                videoDescription={'O que é front-end? Trabalhando na área.'}
            />

            {data.categories.map((category, index) =>
                index === 0 ? (
                    <Carousel category={category} ignoreFirstVideo />
                ) : (
                    <Carousel category={category} />
                ),
            )}
        </BaseTemplate>
    );
};

export default Home;
