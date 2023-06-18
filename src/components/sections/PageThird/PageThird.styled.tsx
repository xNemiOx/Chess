import { color } from '@/style/mixins';
import styled from 'styled-components';
import Image from '@/components/common/Image/Image';
import { mediaBreakpointDown } from '@/style/mixins';

export const Container = styled.div`
    width: 100%;
    height: 1000px;

    overflow: hidden;

    ${mediaBreakpointDown('fhd')} {
        width: 100%;
        height: 770px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 100%;
        height: 700px;
    }

    ${mediaBreakpointDown('xl')} {
        width: 100%;
        height: 760px;
    }

    ${mediaBreakpointDown('sm')} {
        width: 100%;
        height: 1000px;
    }
`;

export const PageThirdContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 150px;

    ${mediaBreakpointDown('fhd')} {
        margin-top: 100px;
    }

    ${mediaBreakpointDown('xxl')} {
        margin-top: 150px;
    }

    ${mediaBreakpointDown('xl')} {
        margin-top: 120px;
    }

    ${mediaBreakpointDown('sm')} {
        margin-top: 120px;
    }
`;
export const PageThirdTextContainer = styled.div`
    width: 880px;
    height: 560px;
    margin-left: 80px;

    ${mediaBreakpointDown('fhd')} {
        margin-left: 60px;
    }

    ${mediaBreakpointDown('xxl')} {
        margin-left: 50px;
    }

    ${mediaBreakpointDown('xl')} {
        margin-left: 40px;
    }
`;

export const PageThirdImageContainer = styled.div`
    position: absolute;
    overflow: hidden;
    margin-left: 1190px;
    margin-top: -130px;
    border-radius: 100px;

    width: 516.43px;
    height: 776.02px;

    ${mediaBreakpointDown('fhd')} {
        width: 391.91px;
        height: 562.92px;

        margin-left: 870px;
        margin-top: -40px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 324.09px;
        height: 465.5px;

        margin-left: 770px;
        margin-top: -40px;
    }

    ${mediaBreakpointDown('xl')} {
        width: 296.86px;
        height: 426.39px;

        margin-left: 420px;
        margin-top: 40px;
    }

    ${mediaBreakpointDown('sm')} {
        width: 236px;
        height: 339px;

        margin-left: 70px;
        margin-top: 510px;
    }
`;

export const PageThirdImage = styled(Image)`
    position: absolute;
    width: 516.43px;
    height: 776.02px;

    border-radius: 100px;

    ${mediaBreakpointDown('fhd')} {
        width: 391.91px;
        height: 562.92px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 324.09px;
        height: 465.5px;
    }

    ${mediaBreakpointDown('xl')} {
        width: 296.86px;
        height: 426.39px;
    }

    ${mediaBreakpointDown('sm')} {
        width: 236px;
        height: 339px;
    }
`;

export const PageThirdImageBlock = styled.div`
    position: absolute;
    width: 516.43px;
    height: 457.61px;

    margin-top: 320px;

    background: linear-gradient(180.49deg, rgba(127, 75, 231, 0) 12.22%, #7f4be7 108.54%);
    opacity: 0.8;
    border-radius: 40px;

    ${mediaBreakpointDown('fhd')} {
        width: 391.91px;
        height: 349.99px;

        margin-top: 220px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 324.09px;
        height: 289.42px;

        margin-top: 180px;
    }

    ${mediaBreakpointDown('xl')} {
        width: 296.86px;
        height: 289.42px;

        margin-top: 140px;
    }

    ${mediaBreakpointDown('sm')} {
        width: 236px;
        height: 209.42px;

        margin-top: 130px;
    }
`;

export const PageThirdTitle = styled.h1`
    color: ${color('blackly')};
    font-weight: 500;
    font-size: 60px;
    line-height: 120%;

    width: 880px;
    height: 288px;

    span {
        color: ${color('purpl')};
        font-weight: 700;
    }

    ${mediaBreakpointDown('fhd')} {
        font-size: 50px;

        width: 620px;
        height: 240px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 40px;

        width: 495px;
        height: 190px;
    }

    ${mediaBreakpointDown('xl')} {
        font-size: 40px;

        width: 309px;
        height: 290px;

        span {
            font-size: 39px;
        }
    }

    ${mediaBreakpointDown('sm')} {
        font-size: 28px;

        width: 309px;
        height: 170px;

        span {
            font-size: 28px;
        }
    }
`;

export const PageThirdTitleText = styled.div`
    color: ${color('blackly')};

    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    letter-spacing: 0.02em;

    width: 720px;
    height: 128px;
    margin-left: 80px;
    margin-top: 30px;

    opacity: 0.8;

    ${mediaBreakpointDown('fhd')} {
        margin-left: 60px;

        font-size: 17px;

        width: 520px;
        height: 135px;
    }

    ${mediaBreakpointDown('xxl')} {
        margin-left: 50px;
        margin-top: 20px;

        font-size: 15px;

        width: 460px;
        height: 115px;
    }

    ${mediaBreakpointDown('xl')} {
        margin-left: 0px;
        margin-top: 20px;

        font-size: 15px;

        width: 300px;
        height: 190px;
    }

    ${mediaBreakpointDown('sm')} {
        margin-left: 0px;
        margin-top: 20px;

        font-size: 16px;

        width: 300px;
        height: 200px;
    }
`;

export const PageThirdButtonTitle = styled.button`
    position: absolute;

    font-weight: 500;
    font-size: 20px;
    font-style: normal;
    color: ${color('white')};

    margin-top: 60px;
    margin-left: 80px;
    width: 270px;
    height: 60px;
    letter-spacing: 0.02em;

    background-color: ${color('purpl')};
    border: 2px solid ${color('purpl')};

    box-shadow: 0px 8px 26.6667px rgba(75, 42, 147, 0.3);
    border-radius: 40px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s linear, color 0.2s linear;

    cursor: pointer;

    &:hover {
        background-color: ${color('white')};
        color: ${color('purpl')};
    }

    ${mediaBreakpointDown('fhd')} {
        margin-left: 60px;

        font-size: 15px;

        width: 220px;
        height: 50px;
    }

    ${mediaBreakpointDown('xxl')} {
        margin-left: 50px;
        margin-top: 40px;

        font-size: 12px;

        width: 170px;
        height: 40px;
    }

    ${mediaBreakpointDown('xl')} {
        margin-left: 0px;
        margin-top: 40px;

        font-size: 14px;

        width: 190px;
        height: 40px;
    }

    ${mediaBreakpointDown('sm')} {
        margin-left: 0px;
        margin-top: 30px;

        font-size: 13px;

        width: 300px;
        height: 40px;
    }
`;
