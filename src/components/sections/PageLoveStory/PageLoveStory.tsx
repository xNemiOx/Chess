import React from 'react';
import {
    Container,
    LoveStoryIcon,
    PageLoveStoryContainer,
    PageLoveStoryContainerText,
    PageLoveStoryContainerVideo,
    PageLoveStoryImage,
    PageLoveStoryImageBlock,
    PageLoveStoryText,
    PageLoveStoryTitle
} from './PageLoveStory.styled';

interface PageLoveStoryProps {
    /* Component props */
}

const PageLoveStory: React.FC<PageLoveStoryProps> = () => {
    // const icons: Record<string, React.ReactNode> = {
    //     youtube: DownloadCircleYouTube,
    //     fb: DownloadCircleFacebook
    // }

    return (
        <Container>
            {
                <PageLoveStoryContainer>
                    <PageLoveStoryContainerVideo>
                        <PageLoveStoryImage src={'/images/LoveStory.png'} layout="fill" />
                        <PageLoveStoryImageBlock />
                        <LoveStoryIcon src={'/images/Subtract.png'} layout="fill" />
                    </PageLoveStoryContainerVideo>

                    <PageLoveStoryContainerText>
                        <PageLoveStoryTitle>
                            {' '}
                            <span>Aimchess:</span> A Love Story
                        </PageLoveStoryTitle>
                        <PageLoveStoryText>
                            Hi, we're Aimchess. We use cutting-edge technology to give you simple insights on how to improve your rating,
                            i.e. you need to work on your time management because you're behind on the clock  for 78% of your moves.
                        </PageLoveStoryText>
                    </PageLoveStoryContainerText>
                </PageLoveStoryContainer>
            }
        </Container>
    );
};

export default PageLoveStory;
