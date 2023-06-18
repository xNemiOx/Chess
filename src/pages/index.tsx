import { GetStaticProps } from 'next';
import React from 'react';
import Only from '@/icons/only.svg';
import Layout from '@/components/common/Layout/Layout';
import { BasePageProps } from '@/interfaces';
import { title } from 'process';
import PageHero from '@/components/sections/PageHero/PageHero';
import PageLoveStory from '@/components/sections/PageLoveStory/PageLoveStory';
import PageDiagram from '@/components/sections/PageDiagram/PageDiagram';
import PageSwiper from '@/components/sections/PageSwiper/PageSwiper';
import PageSecond from '@/components/sections/PageSecond/PageSecond';
import PageThird from '@/components/sections/PageThird/PageThird';
import PagePrice from '@/components/sections/PagePrice/PagePrice';
import PageQuestions from '@/components/sections/PageQuestions/PageQuestions';
import { PageHeroTitle } from '@/components/sections/PageHero/PageHero.styled';

interface IndexProps extends BasePageProps {
    /* Page props*/
}

const Index: React.FC<IndexProps> = (props) => {
    return (
        <Layout meta={props.meta} header={props.header} sandwich={props.sandwich}>
            <PageHero></PageHero>
            <PageLoveStory></PageLoveStory>
            <PageDiagram></PageDiagram>
            <PageSwiper></PageSwiper>
            <PageSecond></PageSecond>
            <PageThird></PageThird>
            <PagePrice></PagePrice>
            <PageQuestions></PageQuestions>
            {/* Page body */}
        </Layout>
    );
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
    return {
        props: {
            meta: {
                title: 'Title',
                description: 'description',
                keywords: 'keywords'
            },
            header: {},
            sandwich: {}
        },
        revalidate: 1
    };
};

export default Index;
