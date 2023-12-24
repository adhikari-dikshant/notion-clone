/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ['sdkqkmmkeekarzyobckn.supabase.co']
    }
}

module.exports = nextConfig
