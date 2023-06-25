import { GetStaticProps } from 'next';
import React from 'react';

import { BasePageProps } from '@/interfaces';
import PageRegist from '@/components/sections/PageRegist/PageRegist';

interface RegistProps extends BasePageProps {
    /* Page props*/
}

const Regist: React.FC<RegistProps> = (props) => {
    return <PageRegist></PageRegist>;
};

export const getStaticProps: GetStaticProps<RegistProps> = async () => {
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

export default Regist;
