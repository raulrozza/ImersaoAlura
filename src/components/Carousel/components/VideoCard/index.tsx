import React from 'react';
import PropTypes from 'prop-types';

import { VideoCardContainer } from './styles';
import { useVideoSelect } from '../../../../pages/Home';

function getYouTubeId(youtubeURL: string) {
    return youtubeURL.replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7',
    );
}

interface IProps {
    videoTitle: string;
    videoURL: string;
    categoryColor: string;
}

const VideoCard: React.FC<IProps> = ({
    videoTitle,
    videoURL,
    categoryColor,
}) => {
    const image = `https://img.youtube.com/vi/${getYouTubeId(
        videoURL,
    )}/hqdefault.jpg`;
    const setSelectedVideo = useVideoSelect();

    const handleSelect: React.MouseEventHandler = event => {
        event.preventDefault();

        setSelectedVideo({ title: videoTitle, url: videoURL });
        window.scrollTo({ top: 0 });
    };

    return (
        <VideoCardContainer
            url={image}
            href={videoURL}
            target="_blank"
            style={{ borderColor: categoryColor || 'red' }}
            title={videoTitle}
            onClick={handleSelect}
        />
    );
};

VideoCard.propTypes = {
    videoTitle: PropTypes.string.isRequired,
    videoURL: PropTypes.string.isRequired,
    categoryColor: PropTypes.string.isRequired,
};

export default VideoCard;
