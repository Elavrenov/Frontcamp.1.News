(async() => await import('../styles/style.css'))();
(async() => await import ('../styles/news.css'))();
const errorHandler = (async() => await import('./errorHandler.js'))();
import proxyApiFactory from './proxyRequestFactory.js';
import newsApiQueryCreator from './newsApiQueryCreator';
import { DropDown } from './publishersDd.js';

const el = document.getElementById("publishersList");
const searchButton = document.getElementById('getNewsButton');
const newsOutput = document.getElementById('news');

const mainDd = new DropDown(el);

const publishersDataPromise = (async() => 
    await proxyApiFactory('get', newsApiQueryCreator.getAllNewsPublishersQuery())
    .then(x=>x.sources))();

(async() => await mainDd.createDdList(publishersDataPromise)
    .catch(e=> (async()=>await errorHandler
    .then(x => x.default.createPopup(e)))()))();


searchButton.onclick = () => {
    if(mainDd.val){
        let newsBar = (async() => {
            const bar = await import('./newsMenu.js');
            return new bar.NewsBar(newsOutput);
        })();
        (async()=>await newsBar.then(x=>{
            x.cleanData();
            (async()=>{
                const value = mainDd.val;
                x.createNewsBar(value).catch(e=>(async() => await errorHandler
                .then(x => x.default.createPopup(e)))());
            })();
        }))();
    }
}