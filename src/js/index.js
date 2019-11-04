(async() => await import('../styles/style.css'))();
(async() => await import ('../styles/news.css'))();
const errorHandler = (async() => await import('./errorHandler.js'))();
import proxyApiFactory from './proxyRequestFactory.js';
import newsApiQueryCreator from './newsApiQueryCreator';

let el = document.getElementById("publishersList");
let searchButton = document.getElementById('getNewsButton');
let newsOutput = document.getElementById('news');


let mainDdPromise = (async() => {
    const dd = await import('./publishersDd.js');    
    return new dd.DropDown(el);
})(); 
let publishersDataPromise = (async() => 
    await proxyApiFactory('get', newsApiQueryCreator.getAllNewsPublishersQuery())
    .then(x=>x.sources))();

(async() => await mainDdPromise.then(x=>x.createDdList(publishersDataPromise)
    .catch(e=> (async()=>await errorHandler
    .then(x => x.default.createPopup(e)))())))();


searchButton.onclick = () => {
    const val = (async() => await mainDdPromise.then(x=>x.val))();

    if(val){
        let newsBar = (async() => {
            const bar = await import('./newsMenu.js');
            return new bar.NewsBar(newsOutput);
        })();
        (async()=>await newsBar.then(x=>{
            x.cleanData();
            (async()=>{
                const value = await val.then(x=>x.replace(/ /g,'-'));
                x.createNewsBar(value).catch(e=>(async() => await errorHandler
                .then(x => x.default.createPopup(e)))());
            })();
        }))();
    }
}