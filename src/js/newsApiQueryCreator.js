const apiKey = "a8e7022f2469447b94e5d28e5ecbecdd";

export default class newsApiQueries{
    static getAllNewsPublishersQuery = () => `https://newsapi.org/v2/sources?apiKey=${apiKey}`;
    static getNewsRecordsByPublisherNameQuery = (publishersList) => 
        `https://newsapi.org/v2/everything?sources=${publishersList}&apiKey=${apiKey}`;
}