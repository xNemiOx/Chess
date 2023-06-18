import styled from 'styled-components';
import { mediaBreakpointDown } from '@/style/mixins';
import { color } from '@/style/mixins';
import Image from '@/components/common/Image/Image';

export const Container = styled.div`
    z-index: 1000;

    width: 100%;
    height: 1345px;

    ${mediaBreakpointDown('fhd')} {
        margin-top: -150px;
        height: 1145px;
    }

    ${mediaBreakpointDown('xxl')} {
        height: 1050px;
    }
`;

export const ContainerPageSwiper = styled.div`
    z-index: 1000;

    width: 100%;
    height: 1345px;

    padding: 180px 80px 25px 80px;

    ${mediaBreakpointDown('fhd')} {
        padding: 180px 80px 25px 60px;
    }

    ${mediaBreakpointDown('xxl')} {
        padding: 125px 70px 25px 50px;
        height: 923px;
    }
`;

export const ContainerPageSwiperTitleText = styled.div`
    width: 100%;
    height: 256px;
    padding-right: 340px;

    ${mediaBreakpointDown('fhd')} {
        padding-right: 240px;
    }
`;

export const ContainerPageSwiperText = styled.div`
    width: 100%;
    height: 256px;
    padding: 16px 740px 136px 80px;

    ${mediaBreakpointDown('fhd')} {
        padding: 40px 400px 80px 60px;
        height: 200px;
    }

    ${mediaBreakpointDown('xxl')} {
        padding: 30px 400px 80px 50px;
        height: 190px;
    }
`;

export const ContainerSwiper = styled.div`
    width: 1734px;
    height: 645px;

    margin-top: 136px;
    display: flex;
    justify-content: space-between;

    .swiper-scrollbar {
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 5px;
        background-color: ${color('grey')};
        border-radius: 13px;
    }

    .swiper-scrollbar-drag {
        height: 100%;
        background-color: ${color('purpl')};
        border-radius: 13px;
    }

    .swiper-slide {
        width: 560px;
        height: 560px;
    }

    cursor: grab;

    ${mediaBreakpointDown('fhd')} {
        margin-top: 80px;
        width: 100%;
        height: 485px;

        .swiper-slide {
            width: 420px;
            height: 420px;
        }
    }

    ${mediaBreakpointDown('xxl')} {
        margin-top: 30px;
        width: 100%;
        height: 485px;

        .swiper-slide {
            width: 365px;
            height: 365px;
        }
    }
`;

export const SwiperSlideImage = styled(Image)`
    width: 475px;
    height: 475px;
    border: 10px solid ${color('white')};
    border-radius: 8px;

    margin-left: 35px;
    transition: opacity 0.5s, border-color 0.5s;

    ${mediaBreakpointDown('fhd')} {
        width: 350px;
        height: 350px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 318px;
        height: 318px;
        margin-left: 25px;
    }
`;

export const ContainerSwiperSlide = styled.div`
    width: 560px;
    height: 560px;
    overflow: hidden;

    background-color: ${color('grey')};
    border-radius: 47px;
    transition: background-color 0.5s;

    :hover {
        background-color: ${color('purpl')};

        div {
            color: ${color('white')};
        }

        ${SwiperSlideImage} {
            opacity: 0.4;
            border-color: transparent;
        }
    }

    ${mediaBreakpointDown('fhd')} {
        width: 420px;
        height: 420px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 370px;
        height: 370px;
    }
`;

export const ContainerSwiperSlideActive = styled.div`
    width: 560px;
    height: 560px;
    overflow: hidden;

    background-color: ${color('purpl')};
    border-radius: 47px;
`;

export const PageSwiperTitle = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 60px;
    line-height: 120%;

    color: ${color('black')};

    span {
        color: ${color('purpl')};
        font-weight: 700;
    }

    ${mediaBreakpointDown('fhd')} {
        font-size: 50px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 40px;
    }
`;

export const PageSwiperText = styled.div`
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

export const SwiperSlideTitle = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 100%;
    height: 250px;

    color: ${color('purpl')};
    padding: 48px 32px 55px 40px;

    transition: color 0.5s;

    ${mediaBreakpointDown('fhd')} {
        font-size: 40px;
        padding: 27px 24px 31px 30px;
        height: 150px;
    }

    ${mediaBreakpointDown('fhd')} {
        font-size: 30px;
    }
`;

export const SwiperSlideTitleActive = styled.div`
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 100%;
    height: 250px;

    color: ${color('white')};
    padding: 48px 32px 55px 40px;
`;
