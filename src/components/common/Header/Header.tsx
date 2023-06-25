import React, { useEffect } from 'react';
import {
    Container,
    ContainerAim,
    ContainerHeader,
    ContainerLogin,
    ContainerNav,
    HeaderLogoAim,
    HeaderLogo,
    HeaderNav,
    HeaderButtonTryNow
} from './Header.styled';
import LogoAim from '@/icons/Vector.svg';

export interface HeaderProps {
    /* Component Props */
}

const Header: React.FC<HeaderProps> = () => {
    useEffect(() => {}, []);
    return (
        <Container>
            <ContainerHeader>
                <ContainerAim>
                    <HeaderLogoAim>
                        <LogoAim />
                    </HeaderLogoAim>
                    <HeaderLogo>Aimchess</HeaderLogo>
                </ContainerAim>

                <ContainerNav>
                    {['About', 'Lessons', 'For coaches', 'Pricing', 'Contacts'].map((el) => (
                        <HeaderNav key={el}>{el}</HeaderNav>
                    ))}
                </ContainerNav>

                <ContainerLogin>
                    <HeaderNav href="/Login">Login</HeaderNav>
                    <HeaderButtonTryNow href="/Login">Try now</HeaderButtonTryNow>
                </ContainerLogin>
            </ContainerHeader>
        </Container>
    );
};

export default Header;
