(async() => await import('../styles/style.css'))();
(async() => await import ('../styles/news.css'))();
import proxyApiFactory from './requestsFactory.js';
import newsApiQueryCreator from './newsApiQueryCreator';
import { DropDown } from './publishersDd.js';

const el = document.getElementById("publishersList");
const searchButton = document.getElementById('getNewsButton');
const newsOutput = document.getElementById('news');

const mainDd = new DropDown(el);

const publishersDataPromise = (async() =>
    await proxyApiFactory('get', newsApiQueryCreator.getAllNewsPublishersQuery()).then(x=>x.sources))(); 
    

(async() => await mainDd.createDdList(publishersDataPromise))(); 

searchButton.onclick = () => {
    if(mainDd.val){
        (async()=>{
                const bar = await import('./newsMenu.js');
                const newsBar = new bar.NewsBar(newsOutput);
                newsBar.cleanData();
                await newsBar.createNewsBar(mainDd.val);
        })();
    }
}

invalidRequest.onclick = async() => 
    await proxyApiFactory('postget', newsApiQueryCreator.getAllNewsPublishersQuery());