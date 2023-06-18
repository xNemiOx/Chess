import React, { useState } from 'react';
import { Container, ContainerTitleText, PageQuestionsTitle } from './PageQuestions.styled';
import Spoiler from '@/components/ui/Spoiler/Spoiler';
import data from '@/data/spoiler.json';
import { title } from 'process';

interface PageQuestionsProps {
    /* Component props */
}

const PageQuestions: React.FC<PageQuestionsProps> = () => {
    // const icons: Record<string, React.ReactNode> = {
    //     youtube: DownloadCircleYouTube,
    //     fb: DownloadCircleFacebook
    // }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            {
                <ContainerTitleText>
                    <PageQuestionsTitle>Frequently Asked Questions</PageQuestionsTitle>

                    {data.map((spoilerData) => (
                        <Spoiler {...spoilerData} key={title} />
                    ))}
                </ContainerTitleText>
            }
        </Container>
    );
};

export default PageQuestions;
