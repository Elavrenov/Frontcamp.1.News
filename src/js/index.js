import * as newsApi from './newsApi';
import * as publishersDd from './publishersDd';
import '../styles/style.css';
import '../styles/news.css';

let el = document.getElementById("publishersList");
let buttonDd = document.getElementById('getNewsButton');
let outputDd = document.getElementById('news');

let mainDd = new publishersDd.DropDown(el, buttonDd, outputDd);
let publishersDataPromise = newsApi.getAllNewsPublishers();
mainDd.getHtml(publishersDataPromise);



