import * as newsApi from './newsApi';

export class NewsBar{
    constructor(el){
        this.barEl = el;
    }

    async createNewsBar(publisher){
        let news = await newsApi.getNewsRecordsByPublisherName(publisher, 10);

        debugger;
        for(let item of news){
            let div = document.createElement('div');
            div.classList.add('newsBlock');

            let title = document.createElement('span');
            title.innerHTML = item.title;
            title.classList.add('newsTitle');
            div.appendChild(title);

            let picture = document.createElement('img');
            picture.setAttribute('src',`${item.urlToImage}`)

            let link = document.createElement('a');
            link.setAttribute('href',`${item.url}`);
            link.appendChild(picture);
            div.appendChild(link);

            this.barEl.appendChild(div);
        }
    }
}