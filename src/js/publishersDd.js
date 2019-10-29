import * as newsBar from './newsMenu';

export class DropDown {
    constructor(el, buttonElement, outputElement){
        this.dd = el;
        this.placeholder;
        this.opts;
        this.val;
        this.button = buttonElement;
        this.output = outputElement;
    }
    init() {
        this.placeholder = this.dd.children[0];
        this.opts = this.dd.children[1];
        let news = new newsBar.NewsBar(this.output);

        this.dd.onclick = () => {
            this.dd.classList.toggle('active');
            this.isActive = true;
        };
        
        this.opts.onclick = (data) =>{
            this.val = data.target.textContent;
            this.placeholder.textContent = this.val;
        };

        this.button.onclick = () => {
            if(this.val){
                news.createNewsBar(this.val); 
            }
        }
    }
    get getTargetDdValue(){
        return this.val;
    }
    async getHtml(promiseData){
        this.dd.classList.add("wrapper-publishers-dropdown");;
    
        let ul = document.createElement('ul');
        ul.classList.add('dropdown');
        this.dd.appendChild(ul);

        this.init();

        for(let item of await promiseData){
            let li = document.createElement('li');
            li.innerHTML = item;
            ul.appendChild(li);
        }
    }
}