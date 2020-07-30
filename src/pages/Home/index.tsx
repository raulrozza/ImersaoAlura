import React from 'react';

// Components
import BaseTemplate from '../../components/BaseTemplate';
import BannerMain from '../../components/BannerMain';
import Carousel, { IVideo, ICategory } from '../../components/Carousel';

// Data
import data from '../../data/db.json';

const Home: React.FC = () => {
    const selectedVideo: IVideo = (data.categories &&
        data.categories[0].videos &&
        data.categories[0].videos[0]) || {
        title: 'Nenhum vídeo selecionado',
        url: '',
    };

    return (
        <BaseTemplate title="Home - Rozzaflix" horizontalPadding={false}>
            <BannerMain
                videoTitle={selectedVideo.title}
                url={selectedVideo.url}
                videoDescription={'O que é front-end? Trabalhando na área.'}
            />

            {data.categories.map((category, index) =>
                index === 0 ? (
                    <Carousel
                        category={category as ICategory}
                        ignoreFirstVideo
                    />
                ) : (
                    <Carousel category={category as ICategory} />
                ),
            )}
        </BaseTemplate>
    );
};

export default Home;
