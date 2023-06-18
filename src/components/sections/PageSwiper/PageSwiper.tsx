import React, { useState } from 'react';
import {
    Container,
    ContainerPageSwiper,
    ContainerPageSwiperText,
    ContainerPageSwiperTitleText,
    ContainerSwiper,
    ContainerSwiperSlide,
    PageSwiperText,
    PageSwiperTitle,
    SwiperSlideImage,
    SwiperSlideTitle
} from './PageSwiper.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, SwiperOptions } from 'swiper';
import data from '@/data/SlidesChess.json';
import { title } from 'process';

interface PageSwiperProps {
    /* Component props */
}

const PageSwiper: React.FC<PageSwiperProps> = () => {
    // const icons: Record<string, React.ReactNode> = {
    //     youtube: DownloadCircleYouTube,
    //     fb: DownloadCircleFacebook
    // }

    const [setSwiper] = useState<any>();

    const swiperOptions: SwiperOptions = {
        speed: 500,
        init: false
    };

    return (
        <Container>
            {
                <ContainerPageSwiper>
                    <ContainerPageSwiperTitleText>
                        <PageSwiperTitle>
                            <span>Improve faster</span> with personalized lessons built for you and by you
                        </PageSwiperTitle>

                        <ContainerPageSwiperText>
                            <PageSwiperText>
                                Once we find your weaknesses, we help you address them by combining personalized puzzles built from your
                                mistakes with unique lessons created by a team of grandmasters and coaches.
                            </PageSwiperText>
                        </ContainerPageSwiperText>
                    </ContainerPageSwiperTitleText>

                    <ContainerSwiper>
                        <Swiper
                            scrollbar={{
                                hide: true,
                                draggable: true
                            }}
                            modules={[Scrollbar]}
                            {...swiperOptions}
                            onSwiper={setSwiper}
                            slidesPerView={'auto'}
                            spaceBetween={30}
                        >
                            {data.map((el) => (
                                <SwiperSlide key={el.title}>
                                    <ContainerSwiperSlide>
                                        <SwiperSlideTitle>{el.title}</SwiperSlideTitle>
                                        <SwiperSlideImage src={el.img} layout="fill" />
                                    </ContainerSwiperSlide>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </ContainerSwiper>
                </ContainerPageSwiper>
            }
        </Container>
    );
};

export default PageSwiper;
