// API endpoints
export const WZL_API = {
    API_BASE_URL: 'https://wizeline-academy.cdn.prismic.io/api/v2',
    BANNERS_URL: '%5B%5Bat(document.type%2C%20%22banner%22)%5D%5D&lang=en-us&pageSize=30',
    CATEGORIES_URL: '%5B%5Bat(document.type%2C%20%22category%22)%5D%5D&lang=en-us&pageSize=30',
    FEATURED_URL: '%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bat(document.tags%2C%20%5B%22Featured%22%5D)%5D%5D&lang=en-us&pageSize=16',
    PRODUCTS_URL: '%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&lang=en-us&pageSize=12',
    SINGLEPRODUCT_URL: '&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22{productId}%22%29+%5D%5D',
    API_ID: 'YWYpRBIAACwA3RZ5'
}


