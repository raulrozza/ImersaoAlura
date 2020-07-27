import React from 'react';
import PropTypes from 'prop-types';

// Components
import VideoIframeResponsive from './components/VideoIframeResponsive';

// Styles
import {
    BannerMainContainer,
    ContentAreaContainer,
    WatchButton,
} from './styles';

function getYouTubeId(youtubeURL: string) {
    return youtubeURL.replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7',
    );
}

interface IProps {
    videoTitle: string;
    videoDescription: string;
    url: string;
}

const BannerMain: React.FC<IProps> = ({
    videoTitle,
    videoDescription,
    url,
}) => {
    const youTubeID = getYouTubeId(url);
    const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

    return (
        <BannerMainContainer backgroundImage={bgUrl}>
            <ContentAreaContainer.Section>
                <ContentAreaContainer.Item>
                    <ContentAreaContainer.Title>
                        {videoTitle}
                    </ContentAreaContainer.Title>

                    <ContentAreaContainer.Description>
                        {videoDescription}
                    </ContentAreaContainer.Description>
                </ContentAreaContainer.Item>

                <ContentAreaContainer.Item>
                    <VideoIframeResponsive youtubeID={youTubeID} />
                    <WatchButton>Assistir</WatchButton>
                </ContentAreaContainer.Item>
            </ContentAreaContainer.Section>
        </BannerMainContainer>
    );
};

BannerMain.propTypes = {
    videoTitle: PropTypes.string.isRequired,
    videoDescription: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default BannerMain;
