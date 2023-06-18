import styled from 'styled-components';
import { mediaBreakpointDown, mediaBreakpointUp } from '@/style/mixins';
import { color } from '@/style/mixins';
import Image from '@/components/common/Image/Image';
import { SwiperSlide } from 'swiper/react';

export const Container = styled.div`
    z-index: 1000;

    width: 100%;
    height: 1400px;

    .swiper {
        overflow: visible;
    }

    ${mediaBreakpointDown('xl')} {
        .swiper .swiper-pagination {
            position: absolute;
            left: 0;
            bottom: 0;
            right: 0;
            height: 5px;
            background-color: ${color('grey')};
            border-radius: 13px;
        }

        .swiper-pagination-bullet {
            height: 100%;
            background-color: ${color('purpl')};
            border-radius: 13px;
        }
    }

    .swiper .swiper-slide {
        height: 150px;

        ${mediaBreakpointUp('lg')} {
            position: absolute;
        }

        &:nth-child(1) {
            top: 0;
            left: 0;

            ${mediaBreakpointDown('xl')} {
                position: unset;
            }
        }

        &:nth-child(2) {
            ${mediaBreakpointUp('fhd')} {
                top: 320px;
                left: 0;
            }

            ${mediaBreakpointDown('fhd')} {
                top: 230px;
                left: 0;
            }

            ${mediaBreakpointDown('xl')} {
                position: unset;
            }
        }

        &:nth-child(3) {
            ${mediaBreakpointUp('fhd')} {
                left: 50px;
                top: 640px;
            }

            ${mediaBreakpointDown('fhd')} {
                top: 460px;
                left: 50px;
            }

            ${mediaBreakpointDown('xl')} {
                position: unset;
            }
        }

        &:nth-child(4) {
            ${mediaBreakpointUp('fhd')} {
                top: 0;
                left: 1200px;
            }

            ${mediaBreakpointDown('fhd')} {
                left: 860px;
            }

            ${mediaBreakpointDown('xxl')} {
                left: 750px;
            }

            ${mediaBreakpointDown('xl')} {
                position: unset;
            }
        }

        &:nth-child(5) {
            ${mediaBreakpointUp('fhd')} {
                top: 320px;
                left: 1270px;
            }

            ${mediaBreakpointDown('fhd')} {
                top: 230px;
                left: 910px;
            }

            ${mediaBreakpointDown('xxl')} {
                left: 820px;
            }

            ${mediaBreakpointDown('xl')} {
                position: unset;
            }
        }

        &:nth-child(6) {
            ${mediaBreakpointUp('fhd')} {
                top: 640px;
                left: 1120px;
            }

            ${mediaBreakpointDown('fhd')} {
                top: 460px;
                left: 800px;
            }

            ${mediaBreakpointDown('xxl')} {
                left: 720px;
            }

            ${mediaBreakpointDown('xl')} {
                position: unset;
            }
        }

        ${mediaBreakpointDown('xxl')} {
            height: 150px;
        }
    }
`;

export const DiagramText = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;

    letter-spacing: 0.02em;

    color: ${color('black')};

    opacity: 0;
    cursor: pointer;
`;

export const ContainerPageDiagram = styled.div`
    width: 100%;
    height: 1729px;

    padding: 80px 65px;

    ${mediaBreakpointDown('fhd')} {
        padding: 100px 50px;
        height: 1329px;
    }

    ${mediaBreakpointDown('xxl')} {
        padding: 100px 44px;
        height: 1329px;
    }

    ${mediaBreakpointDown('xl')} {
        padding: 40px 0px 10px 38px;
        height: 1329px;
    }
`;

export const ContainerPageDiagramTitleText = styled.div`
    width: 100%;
    height: 506px;

    padding: 40px 255px 165px 95px;

    ${mediaBreakpointDown('fhd')} {
        padding: 30px 240px 130px 60px;
        height: 400px;
    }

    ${mediaBreakpointDown('xxl')} {
        padding: 25px 240px 120px 10px;
        height: 360px;
    }

    ${mediaBreakpointDown('xl')} {
        padding: 20px 100px 35px 0px;
        height: 840px;
        width: 650px;
    }
`;

export const ContainerPageDiagramText = styled.div`
    width: 800px;
    height: 128px;

    padding: 40px 0 0 80px;

    ${mediaBreakpointDown('fhd')} {
        padding: 40px 0 0 60px;
    }

    ${mediaBreakpointDown('xxl')} {
        padding: 30px 0 0 50px;
        width: 550px;
    }

    ${mediaBreakpointDown('xxl')} {
        padding: 35px 0 0 0px;
        width: 470px;
    }
`;

export const ContainerDiagram = styled.div`
    width: 100%;
    height: 1201px;

    padding: 0 95px 30px 95px;

    ${mediaBreakpointDown('fhd')} {
        height: 601px;
    }

    ${mediaBreakpointDown('xl')} {
        height: 601px;
        padding: 0 240px 10px 0px;
    }
`;

export const ContainerDiagramTitleText = styled.div`
    /* position: absolute; */
    width: 440px;
    /* height: 45px; */
    /* overflow: hidden; */

    transition: height 0.5s;

    ${mediaBreakpointDown('xxl')} {
        width: 340px;
    }

    &:nth-child(1) {
        top: 0;
    }

    &:hover {
        p {
            opacity: 1;
        }

        div {
            color: ${color('purpl')};
            opacity: 1;
        }
    }

    div {
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 100%;

        color: ${color('black')};
        padding-bottom: 6px;

        transition: color 0.3s;

        opacity: 0.5;
        cursor: pointer;

        ${mediaBreakpointDown('fhd')} {
            font-size: 30px;
        }
    }

    p {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 160%;
        width: 360px;

        letter-spacing: 0.02em;

        color: ${color('black')};

        transition: opacity 0.3s;

        opacity: 0;
        cursor: pointer;

        ${mediaBreakpointDown('fhd')} {
            font-size: 17px;
            width: 260px;
        }

        ${mediaBreakpointDown('xxl')} {
            font-size: 15px;
            width: 260px;
        }
    }
`;

export const ContainerDiagramTitleText2 = styled.div`
    position: absolute;
    margin-top: 320px;
    width: 420px;
    height: 45px;

    transition: height 0.5s;

    &:hover {
        height: 230px;
    }
`;

export const ContainerDiagramTitleText1 = styled.div`
    /* position: absolute; */
    /* margin-top: 320px; */
    width: 420px;
    height: 45px;

    transition: height 0.5s;

    &:hover {
        height: 230px;
    }

    /* &:nth-child(1) { */
    /* top: ; */
    /* } */
`;

export const PageDiagramStar = styled.div`
    svg {
        color: ${color('purpl')};

        width: 134.6px;
        height: 134.6px;
    }
`;

export const PageDiagramTitle = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    line-height: 120%;

    color: ${color('black')};

    span {
        color: ${color('purpl')};

        font-weight: 700;
        display: block;

        ${mediaBreakpointDown('xl')} {
            display: unset;
        }
    }

    ${mediaBreakpointDown('fhd')} {
        font-size: 50px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 40px;
    }
`;

export const PageDiagramText = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 160%;

    letter-spacing: 0.02em;

    color: ${color('black')};

    opacity: 0.8;

    ${mediaBreakpointDown('fhd')} {
        font-size: 17px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 15px;
    }
`;

export const DiagramBackground = styled(Image)`
    position: absolute;
    z-index: -2;

    margin-top: -240px;
    margin-left: -40px;

    width: 1650px;
    height: 1201px;

    ${mediaBreakpointDown('fhd')} {
        width: 1250px;
        height: 900px;

        margin-top: -180px;
        margin-left: -70px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 1076.88px;
        height: 785.79px;

        margin-top: -140px;
        margin-left: -35px;
    }

    ${mediaBreakpointDown('xl')} {
        width: 1084.53px;
        height: 788.61px;

        margin-top: -830px;
        margin-left: -200px;
    }
`;

export const DiagramTitle = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 40px;
    line-height: 100%;

    color: ${color('black')};
    padding-bottom: 26px;

    opacity: 0.5;
    cursor: pointer;
`;
