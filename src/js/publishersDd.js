export class DropDown {
    constructor(el){
        this.dd = el;
        this.placeholder;
        this.opts;
        this.val;
        this.buttonNextPage;
        this.publishersMap;
    }
    init() {
        this.placeholder = this.dd.children[0];
        this.opts = this.dd.children[1];
        

        this.dd.onclick = () => {
            this.dd.classList.toggle('active');
        };
        
        this.opts.onclick = (data) =>{
            if(data.target === this.opts){
                return;
            }

            this.val = data.target.id;
            this.placeholder.textContent = data.target.textContent;
        };
        
        document.onclick = (e) => {
            const target = e.target;
            const itsMenu = target == this.dd || this.dd.contains(target);
            const itsHamburger = target == this.opts;
            const itsButtonNextPage = target == this.buttonNextPage;
            const isActive = this.dd.classList.contains('active');
            
            if (!itsMenu && !itsHamburger && isActive && !itsButtonNextPage){
                this.dd.classList.toggle('active');
            }
        }
    }
    async createDdList(data){
        debugger;
        const defaultPlaceholder = "Publishers List"

        this.publishersMap = new Map();
        let mapKeys = [];
        for(let item of await data){
            this.publishersMap.set(item.id,item.name);
            mapKeys.push(item.id);
        }

        const chunkPublishersData = this.sliceData(mapKeys);     
        let dataIterator = this.sliceDataIterator(chunkPublishersData);

        this.getHtml(dataIterator.next().value);

        this.buttonNextPage = document.getElementById('changePublishers');

        this.buttonNextPage.onclick = () => {
            this.placeholder.textContent = defaultPlaceholder;
            const iterableData = dataIterator.next().value;

            if(iterableData){
                this.createNewDataChunk(iterableData);
            }else{
                dataIterator = this.sliceDataIterator(chunkPublishersData);
                const circleNewdata = dataIterator.next().value;
                this.createNewDataChunk(circleNewdata)
            }
        }
    }
    createNewDataChunk(data){
        const dd = document.getElementsByClassName('dropdown')[0];
        dd.parentNode.removeChild(dd);
        this.getHtml(data);
    }
    *sliceDataIterator(data){
        for(let dataChunk of data){
            yield dataChunk;
        }
    }
    sliceData(data){
        const chunkSize = 10;
        const slicedArray = [];

        for (let i = 0; i <data.length; i += chunkSize) {
            slicedArray.push(data.slice(i, i + chunkSize));
        }

        return slicedArray;
    }
    getHtml(promiseData){
        this.dd.classList.add("wrapper-publishers-dropdown");;
    
        let ul = document.createElement('ul');
        ul.classList.add('dropdown');
        this.dd.appendChild(ul);    

        for(let item of promiseData){
            let li = document.createElement('li');
            li.innerHTML = this.publishersMap.get(item);
            li.id = item;
            ul.appendChild(li);
        }

        this.init();
    }
}