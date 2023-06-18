import styled from 'styled-components';
import { mediaBreakpointDown } from '@/style/mixins';
import { color } from '@/style/mixins';

export const Container = styled.div`
    position: fixed;
    top: 0;
    z-index: 1000;

    overflow: hidden;
`;

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-evenly;

    width: 1920px;
    padding: 40px 80px;
    text-align: center;

    ${mediaBreakpointDown('fhd')} {
        width: 1440px;
        padding: 40px 60px;
    }

    ${mediaBreakpointDown('xxl')} {
        width: 1280px;
        padding: 35px 40px;
    }

    ${mediaBreakpointDown('xl')} {
        width: 768px;
        padding: 35px 40px;
    }

    ${mediaBreakpointDown('sm')} {
        width: 375px;
        padding: 70px 20px;
    }
`;

export const ContainerAim = styled.header`
    display: flex;
    width: 100%;
    text-align: center;

    ${mediaBreakpointDown('xl')} {
        width: 1%;
    }
`;

export const ContainerNav = styled.nav`
    display: flex;
    text-align: center;

    margin-left: 30px;
    margin-top: 15px;

    ${mediaBreakpointDown('xl')} {
        opacity: 0;
    }

    ${mediaBreakpointDown('sm')} {
        opacity: 0;
        margin-left: -170px;
    }
`;
export const ContainerLogin = styled.header`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    text-align: center;

    margin-top: 15px;

    ${mediaBreakpointDown('xl')} {
        width: 50%;
    }
`;

export const HeaderLogoAim = styled.div`
    svg {
        color: ${color('white')};

        margin-top: 8px;

        width: 62.91px;
        height: 32.67px;

        ${mediaBreakpointDown('fhd')} {
            width: 47.18px;
            height: 24.5px;
        }

        ${mediaBreakpointDown('xxl')} {
            width: 41.18px;
            height: 21.5px;
        }

        ${mediaBreakpointDown('xl')} {
            width: 36.19px;
            height: 18.79px;
        }

        ${mediaBreakpointDown('xl')} {
            width: 50px;
            height: 26px;
        }
    }
`;

export const Header = styled.a`
    letter-spacing: 0.02em;

    font-size: 44px;
    font-weight: bold;
    margin-left: 50px;
    white-space: nowrap;

    color: ${color('white')};

    &:first-child {
        margin-left: 0;
    }

    ${mediaBreakpointDown('fhd')} {
        margin-left: 40px;
    }

    ${mediaBreakpointDown('xxl')} {
        margin-left: 35px;
    }
`;

export const HeaderLogo = styled(Header)`
    margin-left: 20px;

    font-weight: 700;

    ${mediaBreakpointDown('fhd')} {
        font-size: 37px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 33px;
    }

    ${mediaBreakpointDown('xl')} {
        font-size: 30px;
    }

    ${mediaBreakpointDown('sm')} {
        opacity: 0;
    }
`;

export const HeaderNav = styled(Header)`
    font-weight: 500;
    font-size: 20px;
    position: relative;
    line-height: 160%;

    transition: color 0.2s linear;
    cursor: pointer;

    &:after {
        content: '';
        display: block;
        width: 100%;
        height: 3px;
        background-color: ${color('purpl')};
        position: absolute;
        top: 75%;
        left: 0;
        z-index: 1;
        opacity: 0;
        transition: opacity 0.2s linear;
    }

    &:hover {
        &:after {
            opacity: 1;
        }
    }

    ${mediaBreakpointDown('fhd')} {
        font-size: 15px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 13px;
    }

    ${mediaBreakpointDown('sm')} {
        font-size: 12px;
    }
`;

export const HeaderButtonTryNow = styled.button`
    font-weight: 500;
    font-size: 20px;
    font-style: normal;
    color: ${color('white')};

    margin-top: -8px;
    margin-left: 50px;
    width: 130px;
    height: 50px;
    letter-spacing: 0.02em;

    background-color: ${color('purpl')};
    border: 2px solid ${color('purpl')};
    border-radius: 40px;

    transition: background-color 0.2s linear, color 0.2s linear;

    cursor: pointer;

    &:hover {
        background-color: ${color('white')};
        color: ${color('purpl')};
    }

    ${mediaBreakpointDown('fhd')} {
        font-size: 15px;
        margin-left: 40px;

        width: 90px;
        height: 40px;
    }

    ${mediaBreakpointDown('xxl')} {
        font-size: 13px;
        margin-left: 35px;

        width: 75px;
        height: 30px;
    }

    ${mediaBreakpointDown('xl')} {
        font-size: 13px;
        margin-left: 50px;

        width: 75px;
        height: 30px;
    }

    ${mediaBreakpointDown('sm')} {
        font-size: 12px;
        margin-left: 20px;

        width: 75px;
        height: 30px;
    }
`;
