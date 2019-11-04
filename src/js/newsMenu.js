import proxyApiFactory from './proxyRequestFactory.js';
import * as newsApiQueryCreator from './newsApiQueryCreator';

export class NewsBar{
    constructor(el){
        this.barEl = el;
    }

    async createNewsBar(publisher){
        let data;

        try{
            data = await proxyApiFactory('get', newsApiQueryCreator.default.getNewsRecordsByPublisherNameQuery(publisher))
                .then(x=>x.articles.slice(0, 12));
        }catch(e){
            throw new Error(e.message);
        } 

        const newsDiv = document.createElement('div');
        newsDiv.classList.add('newsDiv');
        this.barEl.appendChild(newsDiv);

        for(let item of data){
            let div = document.createElement('div');
            div.classList.add('newsBlock');

            let title = document.createElement('span');
            title.innerHTML = item.title;
            title.classList.add('newsTitle');
            div.appendChild(title);

            let picture = document.createElement('img');

            if(!item.urlToImage){
                item.urlToImage = 'https://patientsorgtt.org/wp-content/themes/pott/NoData.png';
            }

            try{
                picture.setAttribute('src',`${item.urlToImage}`); 
            }catch(e){
                throw new Error(e.message);
            }
                          

            let link = document.createElement('a');
            link.setAttribute('href',`${item.url}`);
            link.appendChild(picture);
            div.appendChild(link);

            newsDiv.appendChild(div);
        }           
    }
    cleanData(){
        const newsBar = document.getElementsByClassName("newsDiv")[0];
        if(newsBar){
            newsBar.parentNode.removeChild(newsBar);
        }
    }
}