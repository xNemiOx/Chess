import React from 'react';
import {
    Container,
    ContainerRectangle,
    PageSecondOneChess,
    PageSecondTwoChess,
    PageSecondRectangle,
    RectangleText
} from './PageSecond.styled';

interface PageSecondProps {
    /* Component props */
}

const PageSecond: React.FC<PageSecondProps> = () => {
    return (
        <Container>
            <PageSecondOneChess src={'/images/PageSecondOneChess.png'} layout="fill" />
            <PageSecondTwoChess src={'/images/PageSecondTwoChess.png'} layout="fill" />

            <ContainerRectangle>
                <PageSecondRectangle />
                <RectangleText>
                    Train smarter with a <span>Personalized Study Plan</span> each week from Aimchess
                </RectangleText>
            </ContainerRectangle>
        </Container>
    );
};

export default PageSecond;
