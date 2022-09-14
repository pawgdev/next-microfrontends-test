/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/be',
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
        locales: ['befr', 'benl', 'default'],
        defaultLocale: 'default',
    }
}

module.exports = nextConfig
