import * as newsApi from './newsApi';
import * as publishersDd from './publishersDd';
import * as newsMenu from './newsMenu';
import '../styles/style.css';
import '../styles/news.css';

let el = document.getElementById("publishersList");
let searchButton = document.getElementById('getNewsButton');
let newsOutput = document.getElementById('news');


let mainDd = new publishersDd.DropDown(el);
let publishersDataPromise = newsApi.getAllNewsPublishers();
mainDd.createDdList(publishersDataPromise);


searchButton.onclick = () => {
    const val = mainDd.val;

    if(val){
        let newsBar = new newsMenu.NewsBar(newsOutput);
        newsBar.cleanData();
        newsBar.createNewsBar(val); 
    }
}



