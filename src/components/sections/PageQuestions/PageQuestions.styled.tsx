import styled from 'styled-components';
import { mediaBreakpointDown } from '@/style/mixins';
import { color } from '@/style/mixins';

export const Container = styled.div`
    z-index: 1000;

    width: 100%;
    background-color: ${color('grey')};
`;

export const ContainerTitleText = styled.div`
    width: 100%;
    background-color: ${color('grey')};

    padding: 120px 60px 60px 60px;

    ${mediaBreakpointDown('xxl')} {
        padding: 110px 53px 53px 53px;
    }
`;

export const PageQuestionsTitle = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 120%;

    color: ${color('black')};
    padding-bottom: 74px;

    ${mediaBreakpointDown('fhd')} {
        font-size: 50px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 40px;
        padding-bottom: 57px;
    }
`;

export const QuestionButton = styled.svg`
    margin-top: 10px;
    width: 33px;
    height: 33px;

    cursor: pointer;
`;
