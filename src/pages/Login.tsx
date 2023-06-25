import { GetStaticProps } from 'next';
import React from 'react';

import { BasePageProps } from '@/interfaces';
import PageLogin from '@/components/sections/PageLogin/PageLogin';

interface LoginProps extends BasePageProps {
    /* Page props*/
}

const Login: React.FC<LoginProps> = (props) => {
    return <PageLogin></PageLogin>;
};

export const getStaticProps: GetStaticProps<LoginProps> = async () => {
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

export default Login;
