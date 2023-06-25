import styled from 'styled-components';
import { color } from '@/style/mixins';
import { buttons } from 'polished';
import exp from 'constants';
import Image from '@/components/common/Image/Image';

export const Container = styled.div`
    z-index: 1000;
    width: 100%;
    height: 100vh;
    background-color: wheat;

    display: flex;
`;

export const Container40 = styled.div`
    width: 628px;
    height: 100vh;
    background-color: ${color('purpl')};
    overflow: hidden;
`;

export const Container60 = styled.div`
    width: 1292px;
    height: 100vh;
    background-color: ${color('white_grey')};
`;

export const ContainerRegAim = styled.svg`
    padding-left: 40px;
    padding-top: 30px;
    position: absolute;
    z-index: 1;
`;

export const Container60Reg = styled.div`
    width: 100%;
    height: 100vh;
    padding: 201px 353px 570px 353px;
`;

export const RegBackgroundHeader = styled(Image)`
    width: 100%;
    height: 40%;
`;

export const RegBackground = styled(Image)`
    width: 945px;
    height: 60%;
    margin-left: -945px;
    margin-top: 389px;
    position: absolute;
`;

export const RegTitleAut = styled.a`
    font-weight: 700;
    font-size: 25px;
    line-height: 32.5px;

    &:after {
        content: '';
        display: block;
        width: 164px;
        height: 3px;
        background-color: ${color('purpl')};
        top: 75%;
        left: 0;
        z-index: 1;
        transition: opacity 0.2s linear;
    }
    cursor: pointer;
`;

export const RegEmail = styled.input`
    font-weight: 700;
    font-size: 25px;
    line-height: 32.5px;
    width: 100%;
    margin-left: 1px;
    margin-top: 52px;
    height: 60px;
    padding-left: 20px;
`;

export const RegPassword = styled.input`
    font-weight: 700;
    font-size: 25px;
    line-height: 32.5px;
    width: 100%;
    margin-left: 1px;
    margin-top: 20px;
    height: 60px;
    padding-left: 20px;
`;

export const RegPasswordTrue = styled.input`
    position: absolute;
    font-weight: 700;
    font-size: 25px;
    line-height: 32.5px;
    width: 586px;
    margin-left: 1px;
    margin-top: 20px;
    height: 60px;
    padding-left: 20px;
`;

export const RegTitleReg = styled.a`
    position: absolute;
    margin-top: -35px;
    font-weight: 700;
    font-size: 25px;
    line-height: 32.5px;

    &:after {
        content: '';
        display: block;
        width: 164px;
        height: 3px;
        background-color: ${color('purpl')};
        top: 75%;
        left: 0;
        z-index: 1;
        transition: opacity 0.2s linear;
    }
    cursor: pointer;
`;

export const RegButton = styled.a`
    position: absolute;
    font-weight: 500;
    font-size: 20px;
    font-style: normal;
    color: ${color('white')};

    padding-top: 10px;
    padding-left: 30px;
    margin-top: 120px;
    width: 260px;
    height: 50px;
    letter-spacing: 0.02em;

    background-color: ${color('purpl')};
    border: 2px solid ${color('purpl')};
    border-radius: 40px;

    transition: background-color 0.2s linear, color 0.2s linear;

    cursor: pointer;
`;
