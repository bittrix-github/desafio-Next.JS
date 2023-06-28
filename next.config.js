/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: { styledComponents: true },
    eslint: {
        dirs: ['pages', 'utils']
    }
}

module.exports = nextConfig