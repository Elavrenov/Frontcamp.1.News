const newsApi =(async() => await import('./newsApi.js'))();

export class NewsBar{
    constructor(el){
        this.barEl = el;
    }

    async createNewsBar(publisher){
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('newsDiv');
        this.barEl.appendChild(newsDiv);

        for(let item of await newsApi.then(x=>x.getNewsRecordsByPublisherName(publisher))){
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

            picture.setAttribute('src',`${item.urlToImage}`);               

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