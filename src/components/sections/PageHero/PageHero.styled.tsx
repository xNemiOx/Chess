import { mediaBreakpointDown } from '@/style/mixins';
import { color } from '@/style/mixins';
import styled from 'styled-components';
import Image from '@/components/common/Image/Image';

export const Container = styled.div`
    position: relative;

    width: 100%;
    height: 1220px;

    overflow: hidden;

    ${mediaBreakpointDown('fhd')} {
        width: 100%;
        height: 915px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 100%;
        height: 813px;
    }

    ${mediaBreakpointDown('xl')} {
        width: 100%;
        height: 1050px;
    }

    ${mediaBreakpointDown('sm')} {
        width: 100%;
        height: 850px;
    }
`;

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-evenly;
    text-align: center;
`;

export const ContainerTitleText = styled.div`
    width: 650px;
    margin-left: 160px;
    margin-top: 10px;

    ${mediaBreakpointDown('fhd')} {
        width: 500px;
        margin-top: 20px;
        margin-left: 120px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 450px;
        margin-top: 20px;
        margin-left: 100px;
    }

    ${mediaBreakpointDown('xl')} {
        width: 450px;
        margin-top: 20px;
        margin-left: 40px;
    }

    ${mediaBreakpointDown('sm')} {
        width: 300px;
        margin-top: 20px;
        margin-left: 23px;
    }
`;

export const PageHeroTitle = styled.h1`
    font-weight: 500;
    color: ${color('white')};
    font-size: 100px;

    line-height: 100%;
    width: 898px;
    height: 200px;

    margin-left: 80px;
    margin-top: -220px;

    text-shadow: 0px 8px 26.6667px rgba(75, 42, 147, 0.15);

    span {
        display: block;
        font-weight: 700;
    }

    ${mediaBreakpointDown('fhd')} {
        font-size: 78px;
        height: 150px;
        margin-left: 60px;

        margin-top: -165px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 60px;
        height: 150px;
        margin-left: 50px;

        margin-top: -134px;
    }

    ${mediaBreakpointDown('xl')} {
        font-size: 60px;
        height: 150px;
        margin-left: 40px;

        margin-top: -134px;
    }

    ${mediaBreakpointDown('sm')} {
        font-size: 50px;
        height: 150px;
        margin-left: 20px;

        margin-top: -107px;
    }
`;

export const PageHeroBackground = styled(Image)`
    width: 100%;
    height: 100%;

    position: absolute;
    z-index: -1;

    ${mediaBreakpointDown('fhd')} {
        width: 1440px;
        height: 915px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 100%;
        height: 813px;
    }

    ${mediaBreakpointDown('xl')} {
        width: 1185.75px;
        height: 753.93px;
        left: -408.22px;
        top: 310.44px;
    }

    ${mediaBreakpointDown('sm')} {
        width: 623.13px;
        height: 396.21px;
        left: -214px;
        top: 336px;
    }
`;

export const PageHeroBackgroundHeader = styled(Image)`
    opacity: 0;

    z-index: -2;
    position: absolute;

    ${mediaBreakpointDown('xl')} {
        opacity: 1;

        width: 769px;
        height: 355.84px;
    }

    ${mediaBreakpointDown('sm')} {
        opacity: 1;

        width: 404px;
        height: 389px;
    }
`;

export const PageHeroBackgroundFooter = styled.div`
    opacity: 0;

    z-index: -3;
    position: absolute;

    ${mediaBreakpointDown('sm')} {
        opacity: 1;

        width: 392px;
        height: 146px;
        top: 680px;

        background: linear-gradient(20.56deg, #7d67da -0.43%, #8d78e3 55.95%);
        transform: rotate(180deg);
    }
`;

export const PageHeroPlayIcon = styled(Image)`
    width: 100px;
    height: 100px;

    border-radius: 50%;

    margin-left: 570px;
    margin-top: 470px;

    ${mediaBreakpointDown('fhd')} {
        width: 80px;
        height: 80px;

        margin-left: 426px;
        margin-top: 326px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 65px;
        height: 65px;

        margin-left: 330px;
        margin-top: 300px;
    }

    ${mediaBreakpointDown('xl')} {
        width: 65px;
        height: 65px;

        margin-left: 320px;
        margin-top: 250px;
    }

    ${mediaBreakpointDown('sm')} {
        width: 50px;
        height: 50px;

        margin-left: 257px;
        margin-top: 220px;
    }
`;
export const PageHeroPlayIconCircle = styled.div`
    width: 125px;
    height: 125px;

    margin-left: 557px;
    margin-top: -97px;

    border-radius: 50%;
    border: 6px solid;
    border-color: ${color('white')};

    ${mediaBreakpointDown('fhd')} {
        width: 92px;
        height: 92px;

        margin-left: 420px;
        margin-top: -75px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 75px;
        height: 75px;

        margin-left: 325px;
        margin-top: -90px;
    }

    ${mediaBreakpointDown('xl')} {
        width: 75px;
        height: 75px;

        margin-left: 315px;
        margin-top: -90px;
    }

    ${mediaBreakpointDown('sm')} {
        width: 58px;
        height: 58px;

        margin-left: 253px;
        margin-top: -101px;
    }
`;

export const PageHeroTitleText = styled.div`
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    letter-spacing: 0.02em;
    color: ${color('white')};

    ${mediaBreakpointDown('fhd')} {
        font-size: 17px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 15px;
    }

    ${mediaBreakpointDown('sm')} {
        font-size: 16px;
    }
`;

export const PageHeroButtonTitle = styled.button`
    font-weight: 500;
    font-size: 20px;
    font-style: normal;
    color: ${color('dark_purpl')};

    margin-top: 40px;
    width: 130px;
    height: 50px;
    letter-spacing: 0.02em;

    background-color: ${color('white')};
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
        background-color: ${color('purpl')};
        color: ${color('white')};
    }

    ${mediaBreakpointDown('fhd')} {
        font-size: 17px;

        width: 110px;
        height: 47px;

        margin-top: 30px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 15px;

        width: 100px;
        height: 43px;

        margin-top: 30px;
    }

    ${mediaBreakpointDown('sm')} {
        font-size: 14px;

        width: 330px;
        height: 40px;

        margin-top: 250px;
    }
`;
