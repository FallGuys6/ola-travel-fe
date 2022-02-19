const DEVELOPMENT_API_HOST = '';
const PRODUCTION_API_HOST = '';


const getBaseHost = () => {
    {/**get base host */}
    switch (process.env.NODE_ENV) {
        case 'development':
            return DEVELOPMENT_API_HOST;
        case 'production':
            return PRODUCTION_API_HOST;
        default:
            return DEVELOPMENT_API_HOST;
    }
}

export default getBaseHost;