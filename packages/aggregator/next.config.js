const { FRANCE_URL, BELGIUM_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: `/:path*`,
            },
            {
                source: "/fr",
                destination: `${FRANCE_URL}/fr`,
            },
            {
                source: "/fr/:path*",
                destination: `${FRANCE_URL}/fr/:path*`,
            },
            {
                source: "/be",
                destination: `${BELGIUM_URL}/be`,
            },
            {
                source: "/be/:path*",
                destination: `${BELGIUM_URL}/be/:path*`,
            },
        ];
    },
}

module.exports = nextConfig
