/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['s1.ticketm.net'],
        unoptimized: true
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    env: {
        EVENTS_API_BASE_URL: 'https://app.ticketmaster.com/discovery/v2/',
        TICKETMASTER_API_KEY: 'asNTHoi1gr7t1FgTZYmOgkGpWpoyF20E'
    },
    // output: 'export',
}

module.exports = nextConfig
