'use strict'

const apiKey = "d7081477cc2b49a89e8b5dc3340acb97";

// https://newsapi.org/v2/top-headlines -G \
//     -d country=us \
//     -d apiKey=d7081477cc2b49a89e8b5dc3340acb97


export async function getAllNewsPublishers(){
    try{
        let response = await fetch(`https://newsapi.org/v2/sources?apiKey=${apiKey}`);
        let json = await response.json();
        let publishersList = json.sources.map(source => source.name);

        return publishersList;
    }catch(e){
        throw new Error(e);
    }
}

export async function getNewsRecordsByPublisherName(publishersList, numberOfRecords) {
    try{
        let response = await fetch(`https://newsapi.org/v2/everything?sources=${publishersList}&apiKey=${apiKey}`);
        let json = await response.json();
        let newsRecords = json.articles.slice(0, numberOfRecords);

        return newsRecords;
    }catch(e){
        throw new Error(e);
    }
}