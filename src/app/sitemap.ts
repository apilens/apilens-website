import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date()

    return [
        // Main App (apilens.ai)
        {
            url: 'https://apilens.ai',
            lastModified,
            changeFrequency: 'monthly',
            priority: 1,
        },
        // Documentation Subdomain
        {
            url: 'https://docs.apilens.ai',
            lastModified,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        // App Subdomain - Login
        {
            url: 'https://app.apilens.ai/auth/login',
            lastModified,
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ]
}