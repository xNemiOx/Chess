import React, { useEffect } from 'react';
import {
    Container,
    Container40,
    Container60,
    Container60Login,
    LoginTitleAut,
    LoginEmail,
    LoginPassword,
    LoginButton,
    LoginBackground,
    ContainerLogoAim,
    LoginBackgroundHeader,
    LoginTitleReg,
    LoginPasswordTrue,
    LoginButtonReg,
    Account
} from './PageLogin.styled';
import LogoAim from '@/icons/Vector.svg';
import Link from 'next/link';

export interface PageLoginProps {
    /* Component Props */
}

const PageLogin: React.FC<PageLoginProps> = () => {
    return (
        <Container>
            <Container40>
                <ContainerLogoAim>
                    <LogoAim />
                </ContainerLogoAim>
                <LoginBackgroundHeader src={'/images/ChessHeader.jpg'} layout="fill" />
                <LoginBackground src={'/images/шахматы 1.jpg'} layout="fill" />
            </Container40>
            <Container60>
                <Container60Login>
                    <LoginTitleAut>Авторизация</LoginTitleAut>
                    <LoginEmail placeholder="Email"></LoginEmail>
                    <LoginPassword placeholder="Password"></LoginPassword>
                    <LoginButton href="/">Войти</LoginButton>
                    <Account href="/Regist">Ещё нет аккаунта?</Account>
                </Container60Login>
            </Container60>
        </Container>
    );
};

export default PageLogin;
