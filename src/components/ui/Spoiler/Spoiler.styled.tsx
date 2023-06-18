import styled from 'styled-components';
import { color } from '@/style/mixins';
import { mediaBreakpointDown } from '@/style/mixins';

export const Container = styled.div`
    position: relative;
`;

export const ContainerQestionsTitleButton = styled.div`
    width: 100%;
    height: 130px;

    display: flex;
    justify-content: space-between;

    padding: 36px 55px 0px 40px;

    ${mediaBreakpointDown('fhd')} {
        height: 110px;
    }
`;

export const ContainerQestions = styled.div`
    width: 100%;
    background-color: ${color('white')};

    margin-bottom: 30px;
    border-radius: 46px;

    div {
        width: 100%;
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 100%;

        transition: color 0.3s;

        color: ${color('black')};

        ${mediaBreakpointDown('fhd')} {
            font-size: 30px;
        }

        ${mediaBreakpointDown('xxl')} {
            font-size: 26px;
        }
    }

    p {
        margin: 0;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 160%;

        letter-spacing: 0.02em;
        opacity: 0.8;
        color: ${color('black')};

        padding: 0 250px 40px 80px;

        ${mediaBreakpointDown('fhd')} {
            font-size: 17px;
        }

        ${mediaBreakpointDown('xxl')} {
            font-size: 15px;
        }
    }

    &:hover {
        div {
            color: ${color('purpl')};
        }
    }

    .ReactCollapse--collapse {
        transition: height 500ms;
    }

    cursor: pointer;
`;

export const QuestionButton = styled.svg`
    margin-top: 10px;
    width: 33px;
    height: 33px;

    cursor: pointer;

    ${mediaBreakpointDown('xxl')} {
        margin-top: 0px;
    }
`;
