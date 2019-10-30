import {fetch as fetchPolyfill} from 'whatwg-fetch';
const apiKey = "d7081477cc2b49a89e8b5dc3340acb97";

export async function getAllNewsPublishers(){
    try{
        const response = await fetchPolyfill(`https://newsapi.org/v2/sources?apiKey=${apiKey}`);
        const json = await response.json();
        const publishersList = json.sources.map(source => source.name);

        return publishersList;
    }catch(e){
        throw new Error(e);
    }
}

export async function getNewsRecordsByPublisherName(publishersList, numberOfRecords = 12) {
    try{
        const response = await fetchPolyfill(`https://newsapi.org/v2/everything?sources=${publishersList}&apiKey=${apiKey}`);
        const json = await response.json();
        const newsRecords = json.articles.slice(0, numberOfRecords);

        return newsRecords;
    }catch(e){
        throw new Error(e);
    }
}