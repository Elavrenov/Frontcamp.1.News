const apiKey = "d7081477cc2b49a89e8b5dc3340acb97";

export default class newsApiQueries{
    static getAllNewsPublishersQuery = () => `https://newsapi.org/v2/sources?apiKey=${apiKey}`;
    static getNewsRecordsByPublisherNameQuery = (publishersList) => 
        `https://newsapi.org/v2/everything?sources=${publishersList}&apiKey=${apiKey}`;
}