const newsApiKey = "a8e7022f2469447b94e5d28e5ecbecdd";

export default class newsApiQueries{
    static getAllNewsPublishersQuery = () => {
        return {
            url: `https://newsapi.org/v2/sources`,
            params: {
                apiKey: newsApiKey
            }  
        }
    }
    static getNewsRecordsByPublisherNameQuery = (publishersList) => {
        return {
            url: `https://newsapi.org/v2/everything`,
            params: {
                sources: publishersList,
                apiKey: newsApiKey
            }
        }
    }
}