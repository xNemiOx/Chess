import { color } from '@/style/mixins';
import styled from 'styled-components';
import Image from '@/components/common/Image/Image';
import { mediaBreakpointDown } from '@/style/mixins';

export const Container = styled.footer`
    position: relative;
    overflow: hidden;

    width: 100%;
    height: 960px;

    ${mediaBreakpointDown('xxl')} {
        width: 100%;
        height: 680px;
    }
`;

export const FooterContainer = styled.div`
    width: 100%;
    height: 100%;

    position: relative;
    overflow: hidden;
`;

export const FooterContainerTitle = styled.div`
    position: absolute;
    width: 700px;

    margin-left: 80px;
    margin-top: 160px;

    ${mediaBreakpointDown('fhd')} {
        margin-left: 60px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 440px;
        margin-left: 50px;
        margin-top: 100px;
    }

    ${mediaBreakpointDown('xl')} {
        width: 440px;
        margin-left: 40px;
        margin-top: 80px;
    }

    ${mediaBreakpointDown('sm')} {
        width: 440px;
        margin-left: 20px;
        margin-top: 60px;
    }
`;

export const FooterContainerIcon = styled.div`
    margin-left: 60px;

    ${mediaBreakpointDown('fhd')} {
        margin-left: 40px;
    }

    ${mediaBreakpointDown('xxl')} {
        margin-left: 30px;
    }

    ${mediaBreakpointDown('xl')} {
        margin-left: -20px;
    }
`;

export const FooterContainerLink = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    margin-left: 1040px;
    margin-top: 905px;

    width: 340px;
    height: 50px;

    ${mediaBreakpointDown('fhd')} {
        margin-left: 790px;
        width: 260px;
    }

    ${mediaBreakpointDown('xxl')} {
        margin-left: 720px;
        width: 230px;
        margin-top: 640px;
    }

    ${mediaBreakpointDown('xl')} {
        margin-left: 380px;
        width: 180px;
        margin-top: 625px;
    }

    ${mediaBreakpointDown('sm')} {
        margin-left: 20px;
        margin-top: 545px;
    }
`;

export const FooterTitle = styled.h1`
    color: ${color('white')};

    font-weight: 700;
    font-size: 100px;
    line-height: 100%;

    word-spacing: 100vw;

    ${mediaBreakpointDown('fhd')} {
        font-size: 78px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 60px;
    }

    ${mediaBreakpointDown('xl')} {
        opacity: 0;
    }
`;

export const FooterTitle2 = styled.h1`
    position: absolute;
    margin-top: -120px;

    color: ${color('white')};

    font-weight: 700;
    font-size: 60px;
    line-height: 100%;

    word-spacing: 100vw;

    opacity: 0;

    ${mediaBreakpointDown('xl')} {
        opacity: 1;
    }

    ${mediaBreakpointDown('sm')} {
        font-size: 45px;
    }
`;

export const FooterDownload = styled.div`
    color: ${color('white')};

    margin-left: 80px;
    margin-top: 80px;

    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    letter-spacing: 0.02em;

    ${mediaBreakpointDown('fhd')} {
        font-size: 17px;
        margin-left: 60px;
    }

    ${mediaBreakpointDown('xxl')} {
        margin-left: 50px;
        margin-top: 50px;
    }

    ${mediaBreakpointDown('xl')} {
        margin-left: 0px;
        margin-top: 40px;
    }

    ${mediaBreakpointDown('sm')} {
        font-size: 14px;
        margin-left: 0px;
        margin-top: 70px;
    }
`;

export const FooterDownloadIcon = styled.a`
    svg {
        color: ${color('white')};
        margin-top: 16px;
        margin-left: 20px;

        ${mediaBreakpointDown('xxl')} {
            margin-top: 10px;
        }

        ${mediaBreakpointDown('sm')} {
            margin-top: 15px;
        }

        path {
            fill: white;
            transition: fill 0.3s;
        }

        circle {
            fill: transparent;
            stroke: white;
            opacity: 0.5;
        }

        &:hover {
            path {
                fill: black;
            }

            circle {
                fill: white;
                opacity: 1;
            }
        }
    }
    cursor: pointer;
`;

export const FooterFollowIcon = styled.a`
    svg {
        margin-top: 16px;
        margin-left: 20px;

        ${mediaBreakpointDown('xxl')} {
            margin-top: 10px;
        }

        ${mediaBreakpointDown('sm')} {
            margin-top: 15px;
        }

        path {
            fill: white;
            transition: fill 0.3s;
        }

        circle {
            fill: transparent;
            stroke: white;
            opacity: 0.5;
        }

        &:hover {
            path {
                fill: black;
            }

            circle {
                fill: white;
                opacity: 1;
            }
        }
    }
    cursor: pointer;

    ${mediaBreakpointDown('xxl')} {
        &:last-child {
            opacity: 0;
        }
    }
`;

export const FooterFollow = styled.div`
    color: ${color('white')};

    margin-left: 80px;
    margin-top: 45px;

    font-weight: 500;
    font-size: 20px;
    line-height: 160%;
    letter-spacing: 0.02em;

    ${mediaBreakpointDown('fhd')} {
        font-size: 17px;
        margin-left: 60px;
    }

    ${mediaBreakpointDown('xxl')} {
        margin-left: 50px;
        margin-top: 30px;
    }

    ${mediaBreakpointDown('xl')} {
        margin-left: 0px;
        margin-top: 30px;
    }

    ${mediaBreakpointDown('sm')} {
        font-size: 14px;
        margin-left: 0px;
        margin-top: 30px;
    }
`;

export const FooterBackground = styled(Image)`
    width: 100%;
    height: 100%;
    z-index: -1;
    position: absolute;

    ${mediaBreakpointDown('sm')} {
        opacity: 0;
    }
`;

export const FooterBackground3 = styled(Image)`
    width: 100%;
    height: 100%;
    z-index: -2;
    opacity: 0;
    position: absolute;

    ${mediaBreakpointDown('sm')} {
        opacity: 1;
    }
`;

export const Copyright = styled.div`
    font-weight: 400;
    font-size: 14px;
    line-height: 143.55%;

    margin-top: 190px;

    color: ${color('white')};

    opacity: 0.5;

    ${mediaBreakpointDown('fhd')} {
        font-size: 10px;
        margin-top: 250px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 9px;
        margin-top: 140px;
    }

    ${mediaBreakpointDown('xl')} {
        font-size: 9px;
        margin-top: 150px;
    }

    ${mediaBreakpointDown('sm')} {
        font-size: 12px;
        margin-top: 146px;
    }
`;

export const FooterLink = styled.div`
    position: relative;
    font-weight: 400;
    font-size: 14px;
    line-height: 143.55%;

    color: ${color('white')};

    opacity: 0.5;

    cursor: pointer;

    &:after {
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background-color: ${color('white')};
        position: absolute;
        top: 45%;
        left: 0;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.2s linear;
    }

    &:hover {
        &:after {
            opacity: 0.5;
        }
    }

    ${mediaBreakpointDown('fhd')} {
        font-size: 10px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 9px;
    }

    ${mediaBreakpointDown('sm')} {
        font-size: 12px;

        &:last-child {
            position: absolute;
            margin-top: 30px;
            margin-left: 0px;
        }
    }
`;

export const FooterDesign = styled.div`
    position: absolute;
    font-weight: 400;
    font-size: 14px;
    line-height: 143.55%;

    margin-left: 1760px;
    margin-top: 905px;

    color: ${color('white')};
    cursor: pointer;

    opacity: 0.5;

    ${mediaBreakpointDown('fhd')} {
        font-size: 10px;
        margin-top: 905px;
        margin-left: 1300px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 9px;
        margin-left: 1150px;
        margin-top: 640px;
    }

    ${mediaBreakpointDown('xl')} {
        margin-left: 650px;
        margin-top: 625px;
    }

    ${mediaBreakpointDown('sm')} {
        margin-left: 260px;
        margin-top: 633px;
        font-size: 12px;
    }
`;

export const FooterOnly = styled(Image)`
    position: absolute;
    margin-left: 1830px;
    margin-top: 909px;

    cursor: pointer;

    width: 41px;
    height: 14px;

    ${mediaBreakpointDown('fhd')} {
        margin-left: 1350px;
        margin-top: 905px;
    }

    ${mediaBreakpointDown('xxl')} {
        margin-left: 1200px;
        margin-top: 639px;
    }

    ${mediaBreakpointDown('xl')} {
        margin-left: 700px;
        margin-top: 625px;
    }

    ${mediaBreakpointDown('sm')} {
        margin-left: 320px;
        margin-top: 634px;
    }
`;
