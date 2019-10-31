(async() => await import('../styles/style.css'))();
(async() => await import ('../styles/news.css'))();

window.onload = () =>{
    let el = document.getElementById("publishersList");
    let searchButton = document.getElementById('getNewsButton');
    let newsOutput = document.getElementById('news');
    
    
    let mainDdPromise = (async() => {
        const dd = await import('./publishersDd.js');    
        return new dd.DropDown(el);
    })(); 
    let publishersDataPromise = (async() => {
        const newsApi = await import('./newsApi.js');
        return await newsApi.getAllNewsPublishers();
    })();
    
    (async() => await mainDdPromise.then(x=>x.createDdList(publishersDataPromise)))();
    
    
    searchButton.onclick = () => {
        const val = (async() => await mainDdPromise.then(x=>x.val))();
    
        if(val){
            let newsBar = (async() => {
                const bar = await import('./newsMenu.js');
                return new bar.NewsBar(newsOutput);
            })();
            (async()=>await newsBar.then(x=>{
                x.cleanData();
                x.createNewsBar(val);
            }))();
        }
    }
}