/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import {
    VideoCardGroupContainer,
    VideoCardList,
    Title,
    ExtraLink,
} from './styles';
import VideoCard from './components/VideoCard';

interface IVideo {
    title: string;
    url: string;
}

interface IProps {
    ignoreFirstVideo?: boolean;
    category: {
        title: string;
        color: string;
        link_extra?: {
            text: string;
            url: string;
        } | null;
        videos: IVideo[];
    };
}

const VideoCardGroup: React.FC<IProps> = ({
    ignoreFirstVideo = false,
    category,
}) => {
    const categoryTitle = category.title;
    const categoryColor = category.color;
    const categoryExtraLink = category.link_extra;
    const videos = category.videos;
    return (
        <VideoCardGroupContainer>
            <Title style={{ backgroundColor: categoryColor || 'red' }}>
                {categoryTitle}
            </Title>
            {categoryExtraLink && (
                <ExtraLink href={categoryExtraLink.url} target="_blank">
                    {categoryExtraLink.text}
                </ExtraLink>
            )}
            <VideoCardList>
                {videos.map((video, index) => {
                    if (ignoreFirstVideo && index === 0) {
                        return null;
                    }

                    return (
                        <li key={video.title}>
                            <VideoCard
                                videoTitle={video.title}
                                videoURL={video.url}
                                categoryColor={categoryColor}
                            />
                        </li>
                    );
                })}
            </VideoCardList>
        </VideoCardGroupContainer>
    );
};

VideoCardGroup.propTypes = {
    ignoreFirstVideo: PropTypes.bool,
    category: PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        link_extra: PropTypes.shape({
            text: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        }),
        videos: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
            }).isRequired,
        ).isRequired,
    }).isRequired,
};

export default VideoCardGroup;
