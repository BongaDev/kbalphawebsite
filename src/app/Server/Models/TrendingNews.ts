export class TrendingNews {
    id: string;
    publisher: Publisher;
    title: string;
    author: string;
    published_utc: Date;
    article_url: string;
    tickers: string[];
    amp_url: string;
    image_url: string;
    description: string;
    keywords: string[];
}

export interface Publisher {
    name: string;
    homepage_url: string;
    logo_url: string;
    favicon_url: string;
}