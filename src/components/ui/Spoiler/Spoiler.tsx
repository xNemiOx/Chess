import React, { useState } from 'react';

import { Container, ContainerQestionsTitleButton, QuestionButton, ContainerQestions } from './Spoiler.styled';

import { Collapse } from 'react-collapse';
import ButtonPlus from '@/icons/ButtonPlus.svg';

interface SpoilerProps {
    title: string;
    text: string;
}

const Spoiler: React.FC<SpoilerProps> = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container onClick={() => setIsOpen(!isOpen)}>
            <ContainerQestions>
                <ContainerQestionsTitleButton>
                    <div>{props.title}</div>
                    <QuestionButton>
                        <ButtonPlus />
                    </QuestionButton>
                </ContainerQestionsTitleButton>

                <Collapse isOpened={isOpen}>
                    <p>{props.text}</p>
                </Collapse>
            </ContainerQestions>
        </Container>
    );
};

export default Spoiler;
