import React from 'react';
import {
    Container,
    ContainerHeader,
    ContainerTitleText,
    PageHeroBackground,
    PageHeroBackgroundFooter,
    PageHeroBackgroundHeader,
    PageHeroButtonTitle,
    PageHeroPlayIcon,
    PageHeroPlayIconCircle,
    PageHeroTitle,
    PageHeroTitleText
} from './PageHero.styled';

interface PageHeroProps {
    /* Component props */
}

const PageHero: React.FC<PageHeroProps> = () => {
    return (
        <Container>
            <PageHeroBackgroundHeader src={'/images/ChessHeader.jpg'} layout="fill" />
            <PageHeroBackground src={'/images/шахматы 1.jpg'} layout="fill" />
            <PageHeroBackgroundFooter />

            <ContainerHeader />

            <PageHeroPlayIcon src={'/images/PlayIcon.jpg'} layout="fill" />

            <PageHeroTitle>
                Learn Chess <span>Your Way </span>
            </PageHeroTitle>

            <PageHeroPlayIconCircle />

            <ContainerTitleText>
                <PageHeroTitleText>
                    Aimchess helps chess players like you improve faster by combining unique anlytics with personalized lessons (created
                    from your games!) to make training fun and easy.
                </PageHeroTitleText>
                <PageHeroButtonTitle>Try now</PageHeroButtonTitle>
            </ContainerTitleText>
        </Container>
    );
};

export default PageHero;
