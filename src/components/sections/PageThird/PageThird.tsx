import React from 'react';
import {
    Container,
    PageThirdButtonTitle,
    PageThirdContainer,
    PageThirdImage,
    PageThirdImageBlock,
    PageThirdImageContainer,
    PageThirdTextContainer,
    PageThirdTitle,
    PageThirdTitleText
} from './PageThird.styled';

interface PageThirdProps {
    /* Component props */
}

const PageThird: React.FC<PageThirdProps> = () => {
    return (
        <Container>
            <PageThirdContainer>
                <PageThirdImageContainer>
                    <PageThirdImage src={'/images/Man.png'} layout="fill" />
                    <PageThirdImageBlock></PageThirdImageBlock>
                </PageThirdImageContainer>

                <PageThirdTextContainer>
                    <PageThirdTitle>
                        {' '}
                        <span>A chess coach's dream</span> — reduce preparation time and improve your session productivity
                    </PageThirdTitle>
                    <PageThirdTitleText>
                        "Since discovering Aimchess, I use it for all of my coaching sessions. The option to generate a list of mistakes and
                        blown positions from a student's recent games allows me to more spend more time on instructive moments and less time
                        reviewing games manually." - GM Ankit Rajpara
                    </PageThirdTitleText>
                    <PageThirdButtonTitle>Contact us to get started</PageThirdButtonTitle>
                </PageThirdTextContainer>
            </PageThirdContainer>
        </Container>
    );
};

export default PageThird;
