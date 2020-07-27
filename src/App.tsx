import React from 'react';

// Components
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Menu from './components/Menu';

// Data
import data from './data/data.json';

import './App.css';
import BannerMain from './components/BannerMain';

function App() {
    return (
        <div>
            <Menu />

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

            <Footer />
        </div>
    );
}

export default App;
