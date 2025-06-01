/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['files.stripe.com'],
    },
    experimental: {
        optimizePackageImports: [
            '@heroicons/react/20/solid',
            '@heroicons/react/24/solid',
            '@heroicons/react/24/outline',]
    }
};

export default nextConfig;
