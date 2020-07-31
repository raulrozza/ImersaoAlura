/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider from './components/Slider';
import { SliderItem } from './components/Slider/styles';

export interface IVideo {
    title: string;
    url: string;
}

export interface ICategory {
    id: number;
    title: string;
    color: string;
    link_extra?: {
        text: string;
        url: string;
    } | null;
    videos: IVideo[];
}

interface IProps {
    ignoreFirstVideo?: boolean;
    category: ICategory;
}

const Carousel: React.FC<IProps> = ({ ignoreFirstVideo = false, category }) => {
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
            <Slider sliderBtnColor={categoryColor}>
                {videos.map((video, index) => {
                    if (ignoreFirstVideo && index === 0) {
                        return null;
                    }

                    return (
                        <SliderItem key={video.title}>
                            <VideoCard
                                videoTitle={video.title}
                                videoURL={video.url}
                                categoryColor={categoryColor}
                            />
                        </SliderItem>
                    );
                })}
            </Slider>
        </VideoCardGroupContainer>
    );
};

Carousel.propTypes = {
    ignoreFirstVideo: PropTypes.bool,
    category: PropTypes.shape({
        id: PropTypes.number.isRequired,
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

export default Carousel;
