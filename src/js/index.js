(async() => await import(/* webpackChunkName: "cssStyle" */ '../styles/style.css'))();
(async() => await import (/* webpackChunkName: "cssNews" */ '../styles/news.css'))();
import proxyApiFactory from './requestsFactory.js';
import newsApiQueryCreator from './newsApiQueryCreator';
import { DropDown } from './publishersDd.js';

const el = document.getElementById("publishersList");
const searchButton = document.getElementById('getNewsButton');
const newsOutput = document.getElementById('news');
const mainDd = new DropDown(el);

(async() => {
    const query = newsApiQueryCreator.getAllNewsPublishersQuery();
    const publishers = await proxyApiFactory('get', query.url, query.params);
    await mainDd.createDdList(await publishers.sources);
})(); 

searchButton.onclick = () => {
    if(mainDd.val){
        (async()=>{
                const bar = await import(/* webpackChunkName: "newsMenu" */ './newsMenu.js');
                const newsBar = new bar.NewsBar(newsOutput);
                newsBar.cleanData();
                await newsBar.createNewsBar(mainDd.val);
        })();
    }
}

invalidRequest.onclick = async() =>{
    const query = newsApiQueryCreator.getAllNewsPublishersQuery();
    await proxyApiFactory('postget', query.url, query.params);
} 