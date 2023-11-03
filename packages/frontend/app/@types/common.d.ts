interface StrapiFile {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path?: string;
    width: number;
    height: number;
    size: number;
    url: string;
}

interface BlogPost {
    id: number;
    attributes: {
        title: string;
        excerpt: string;
        Content: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        Hero: {
            data: {
                id: number;
                attributes: {
                    name: string;
                    alternativeText?: string;
                    caption?: string;
                    width: number;
                    height: number;
                    formats: {
                        thumbnail: StrapiFile;
                        small: StrapiFile
                        medium: StrapiFile;
                        large: StrapiFile;
                    }
                    hash: string;
                    ext: string;
                    mime: string;
                    size: number;
                    url: string;
                    previewUrl?: string;
                    provider: string;
                    provider_metadata?: string;
                    created_at: string;
                    updated_at: string;
                }
            },
        }
    }
}