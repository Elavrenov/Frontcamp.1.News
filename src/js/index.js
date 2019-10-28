'use strict'
import * as newsApi from './newsApi';
import '../styles/style.css';

async function createHtml() {    
    let divPublisherst = document.getElementById('publishersList')
    divPublisherst.classList.add("wrapper-publishers-dropdown");;
    
    var ul = document.createElement('ul');
    ul.classList.add('dropdown');
    divPublisherst.appendChild(ul);

    let data = await newsApi.getAllNewsPublishers();
    
    for(let item of data){
        let li = document.createElement('li');
        li.innerHTML = item;
        ul.appendChild(li);
    }
}


class DropDown {
    constructor(el){
        this.dd = el;
        this.placeholder = this.dd.children[0];
        this.opts = this.dd.children[1];
        this.val;
        this.index = -1;
        this.initEvents();
    }
    initEvents() {
        this.dd.onclick = () => {
            this.dd.classList.toggle('active');
        };
        
        this.opts.onclick = (data) =>{
            this.val = data.target.textContent;
            this.placeholder.textContent = this.val;
        };
    }
    get getTargetDdValue(){
        return this.val;
    }
}


// obj.dd.on('click', function(event){
//     $(this).toggleClass('active');
//     return false;
// });
 
// //...
 
// $(function() {
 
//     var dd = new DropDown( $('#dd') );
 
//     $(document).click(function() {
//         // all dropdowns
//         $('.wrapper-dropdown-1').removeClass('active');
//     });
 
// });
function addPuplushersDd() {
    createHtml().then(()=> {
        let el = document.getElementById("publishersList");
        let dd = new DropDown(el);

        return dd;
    })   
    
}

addPuplushersDd();
let x = newsApi.getNewsRecordsByPublisherName("ABC News", 8);
console.log(x);



