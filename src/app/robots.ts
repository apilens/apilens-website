import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/'], // Hide internal API routes
        },
        sitemap: 'https://apilens.ai/sitemap.xml',
    }
}