import React from 'react';
import {
    Container,
    FooterContainer,
    FooterContainerTitle,
    FooterTitle,
    FooterTitle2,
    FooterDownload,
    FooterDownloadIcon,
    FooterFollowIcon,
    FooterFollow,
    FooterContainerIcon,
    FooterBackground,
    FooterBackground3,
    Copyright,
    FooterContainerLink,
    FooterLink,
    FooterDesign,
    FooterOnly
} from './Footer.styled';
import PlaymarketIcon from '@/icons/Playmarket.svg';
import InstagrammIcon from '@/icons/Instagramm.svg';
import YouTubeIcon from '@/icons/Youtube.svg';
import FacebookIcon from '@/icons/Facebook.svg';
import TwitterIcon from '@/icons/Twitter.svg';
import MIcon from '@/icons/M.svg';

interface FooterProps {
    /* Component props */
}

const Footer: React.FC<FooterProps> = () => {
    // const icons: Record<string, React.ReactNode> = {
    //     youtube: DownloadCircleYouTube,
    //     fb: DownloadCircleFacebook
    // }

    return (
        <Container>
            {
                <FooterContainer>
                    <FooterContainerTitle>
                        <FooterTitle>Stay connected</FooterTitle>
                        <FooterTitle2>Get Started</FooterTitle2>
                        <FooterDownload>Download our app in</FooterDownload>

                        <FooterContainerIcon>
                            <FooterDownloadIcon>
                                <PlaymarketIcon />
                            </FooterDownloadIcon>
                        </FooterContainerIcon>

                        <FooterFollow>Follow us</FooterFollow>

                        <FooterContainerIcon>
                            <FooterFollowIcon>
                                <InstagrammIcon />
                            </FooterFollowIcon>

                            <FooterFollowIcon>
                                <YouTubeIcon />
                            </FooterFollowIcon>

                            <FooterFollowIcon>
                                <FacebookIcon />
                            </FooterFollowIcon>

                            <FooterFollowIcon>
                                <TwitterIcon />
                            </FooterFollowIcon>

                            <FooterFollowIcon>
                                <MIcon />
                            </FooterFollowIcon>
                        </FooterContainerIcon>

                        <Copyright>Copyright © 2020 Coachevnik</Copyright>
                    </FooterContainerTitle>

                    <FooterContainerLink>
                        <FooterLink>Privacy policy</FooterLink>
                        <FooterLink>Terms of use</FooterLink>
                    </FooterContainerLink>

                    <FooterDesign>Design by</FooterDesign>
                    <FooterOnly src={'/images/Only..png'} layout="fill" />

                    <FooterBackground src={'/images/Footerback.jpg'} layout="fill" objectFit="cover" />
                    <FooterBackground3 src={'/images/FooterBackground3.jpg'} layout="fill" objectFit="cover" />
                </FooterContainer>
            }
        </Container>
    );
};

export default Footer;
