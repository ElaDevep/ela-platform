/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    // basePath: "https://eladevep.github.io/ela-platform/",
    // output: "export",
    // reactStrictMode: true
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    }
};

module.exports = nextConfig;