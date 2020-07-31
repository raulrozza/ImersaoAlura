import React, {
    useState,
    useEffect,
    createContext,
    useContext,
    Dispatch,
} from 'react';

// Components
import Loading from '../../components/Loading';
import BaseTemplate from '../../components/BaseTemplate';
import BannerMain from '../../components/BannerMain';
import Carousel, { IVideo, ICategory } from '../../components/Carousel';

// Services
import api from '../../services/api';

interface IUseVideoSelect {
    setSelectedVideo: Dispatch<React.SetStateAction<IVideo | null>>;
}

const SelectVideoContext = createContext<IUseVideoSelect>(
    {} as IUseVideoSelect,
);

export function useVideoSelect() {
    const { setSelectedVideo } = useContext<IUseVideoSelect>(
        SelectVideoContext,
    );

    return setSelectedVideo;
}

const Home: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<IVideo | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await api.get('categories?_embed=videos');

                setCategories(data);

                if (data[0] && data[0].videos)
                    setSelectedVideo(data[0].videos[0]);

                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return (
        <BaseTemplate title="Home - Rozzaflix" horizontalPadding={false}>
            {loading ? (
                <Loading fullscreen />
            ) : (
                <>
                    {selectedVideo && (
                        <BannerMain
                            videoTitle={selectedVideo.title}
                            url={selectedVideo.url}
                            videoDescription={'Assista agora mesmo!'}
                        />
                    )}

                    <SelectVideoContext.Provider value={{ setSelectedVideo }}>
                        {categories.map((category, index) =>
                            index === 0 ? (
                                <Carousel
                                    key={category.id}
                                    category={category as ICategory}
                                    ignoreFirstVideo
                                />
                            ) : (
                                <Carousel
                                    key={category.id}
                                    category={category as ICategory}
                                />
                            ),
                        )}
                    </SelectVideoContext.Provider>
                </>
            )}
        </BaseTemplate>
    );
};

export default Home;
