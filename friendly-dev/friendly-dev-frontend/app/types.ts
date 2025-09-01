export type Project = {
    id: string;
    documentId: string;
    title: string;
    description: string;
    image: string;
    url: string;
    date: string;
    category: string;
    featured: boolean;
};

export type Post = {
    id: string;
    image: string;
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    body: string;
};

export type StrapiResponse<T> = {
    data: T[];
};

export type StrapiProject = {
    id: string;
    documentId: string;
    title: string;
    description: string;
    image?: {
        url: string;
        formats?: {
            thumbnail?: { url: string };
            large?: { url: string };
            medium?: { url: string };
            small?: { url: string };
        };
    };
    url: string;
    date: string;
    category: string;
    featured: boolean;
};

export type StrapiPost = {
    id: string;
    documentId: string;
    title: string;
    slug: string;
    excerpt: string;
    image?: {
        url: string;
        formats?: {
            thumbnail?: { url: string };
            large?: { url: string };
            medium?: { url: string };
            small?: { url: string };
        };
    };
    date: string;
    body: string;
};
