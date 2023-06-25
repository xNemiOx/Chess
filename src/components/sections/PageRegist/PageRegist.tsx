import React, { useEffect } from 'react';
import {
    Container,
    Container40,
    Container60,
    Container60Reg,
    RegEmail,
    RegPassword,
    RegBackground,
    ContainerRegAim,
    RegBackgroundHeader,
    RegTitleReg,
    RegPasswordTrue,
    RegButton
} from './PageRegist.styled';
import LogoAim from '@/icons/Vector.svg';
import Link from 'next/link';

export interface PageRegistProps {
    /* Component Props */
}

const PageRegist: React.FC<PageRegistProps> = () => {
    return (
        <Container>
            <Container40>
                <ContainerRegAim>
                    <LogoAim />
                </ContainerRegAim>
                <RegBackgroundHeader src={'/images/ChessHeader.jpg'} layout="fill" />
                <RegBackground src={'/images/шахматы 1.jpg'} layout="fill" />
            </Container40>
            <Container60>
                <Container60Reg>
                    <RegTitleReg>Регистрация</RegTitleReg>
                    <RegEmail placeholder="Email"></RegEmail>
                    <RegPassword placeholder="Password"></RegPassword>
                    <RegPasswordTrue placeholder="Confirm password"></RegPasswordTrue>
                    <RegButton href="/Login">Зарегистрироваться</RegButton>
                </Container60Reg>
            </Container60>
        </Container>
    );
};

export default PageRegist;
