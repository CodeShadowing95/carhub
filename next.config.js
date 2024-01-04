/** @type {import('next').NextConfig} */
const nextConfig = {
    /* The `images` configuration in the `nextConfig` object is specifying the domains from which
    Next.js should load images. In this case, it is specifying that images should be loaded from the
    domain `cdn.imagin.studio`. This allows Next.js to optimize and handle the loading of images
    from that domain. */
    images: {
        domains: ['cdn.imagin.studio']
    },
    typescript: {
        ignoreBuildErrors: true
    }
}

module.exports = nextConfig
