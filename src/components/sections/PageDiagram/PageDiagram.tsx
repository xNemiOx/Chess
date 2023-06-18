import React, { useEffect, useState } from 'react';
import {
    Container,
    ContainerPageDiagram,
    ContainerPageDiagramText,
    PageDiagramTitle,
    ContainerPageDiagramTitleText,
    PageDiagramText,
    ContainerDiagram,
    DiagramBackground,
    ContainerDiagramTitleText
} from './PageDiagram.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, SwiperOptions } from 'swiper';
import data from '@/data/slides.json';
import PageDiagramStar from '@/icons/Star.svg';
import { count } from 'console';

interface PageDiagramProps {
    /* Component props */
}

const PageDiagram: React.FC<PageDiagramProps> = () => {
    // const icons: Record<string, React.ReactNode> = {
    //     youtube: DownloadCircleYouTube,
    //     fb: DownloadCircleFacebook
    // }

    const [swiper, setSwiper] = useState<any>();

    // const Paginations = ({}) =>{
    //     return (

    //     )
    // }

    const swiperOptions: SwiperOptions = {
        speed: 500,
        init: false
    };

    useEffect(() => {
        if (window.innerWidth < 1024) {
            swiper?.enable();
        } else {
            swiper?.disable();
        }
    }, [swiper]);

    return (
        <Container>
            {
                <ContainerPageDiagram>
                    <PageDiagramStar />

                    <ContainerPageDiagramTitleText>
                        <PageDiagramTitle>
                            See what's holding you back from <span>your peak rating</span>
                        </PageDiagramTitle>

                        <ContainerPageDiagramText>
                            <PageDiagramText>
                                When you sign up for Aimchess, we analyze every move from your recent games and measure your skill set
                                across six core aspects of chess. Then we compare you to others with the same rating to show you what you
                                need to improve on.
                            </PageDiagramText>
                        </ContainerPageDiagramText>
                    </ContainerPageDiagramTitleText>

                    <ContainerDiagram>
                        <Swiper
                            pagination={{
                                hideOnClick: true,
                                clickable: true
                            }}
                            modules={[Grid, Pagination]}
                            {...swiperOptions}
                            onSwiper={setSwiper}
                            spaceBetween={30}
                        >
                            {data.map((el) => (
                                <SwiperSlide key={el.title}>
                                    <ContainerDiagramTitleText>
                                        <div>{el.title}</div>
                                        <p>{el.text}</p>
                                    </ContainerDiagramTitleText>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <DiagramBackground src={'/images/Diagram.png'} layout="fill" />
                    </ContainerDiagram>
                </ContainerPageDiagram>
            }
        </Container>
    );
};

export default PageDiagram;
