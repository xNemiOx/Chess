const { i18n } = require('./next-i18next.config');
const colors = require('colors');

if (!process.env.IMAGE_DOMAIN) {
    console.warn(`${colors.yellow('WARN')} - next.config.js содержит пустой список доменов для next/image`)
}

module.exports = {
    mode: 'production',

    // Конфиг для мультиязычности
    i18n,

    react: {
        useSuspense: true,
    },

    // Конфиг для next/image
    images: {
        domains: [process.env.IMAGE_DOMAIN || '']
    },

    // Для пакета @svgr/webpack
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: { and: [/\.(js|ts|md)x?$/] },
            use: [{
                loader: '@svgr/webpack',
                options: {
                    svgoConfig: {
                        plugins: [{
                            name: 'removeViewBox',
                            active: false
                        }]
                    }
                }
            }],
        });
        return config;
    },

    // Переменные env, которые необходимо передавать на клиент
    env: {
        API_URL: process.env.API_URL
    },

    // Компилятор для минификации
    swcMinify: true,

    compiler: {
        styledComponents: true
    }
};
