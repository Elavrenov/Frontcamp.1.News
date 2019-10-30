export class DropDown {
    constructor(el){
        this.dd = el;
        this.placeholder;
        this.opts;
        this.val;
        this.isActive = false;
        this.buttonNextPage;
    }
    init() {
        this.placeholder = this.dd.children[0];
        this.opts = this.dd.children[1];
        

        this.dd.onclick = () => {
            this.dd.classList.toggle('active');
            this.isActive = true;
        };
        
        this.opts.onclick = (data) =>{
            this.val = data.target.textContent;
            this.placeholder.textContent = this.val;
        };
        
        document.onclick = (e) => {
            let target = e.target;
            let itsMenu = target == this.dd || this.dd.contains(target);
            let itsHamburger = target == this.opts;
            const itsGetButton = target == document.getElementById('getNewsButton');
            const itsButtonNextPage = target == this.buttonNextPage;
            
            if (!itsMenu && !itsHamburger && this.isActive && !itsButtonNextPage && !itsGetButton){
                this.dd.classList.toggle('active');
                this.isActive = false;
            }
        }
    }
    get getTargetDdValue(){
        return this.val;
    }
    async createDdList(data){
        const defaultPlaceholder = "Publishers List"
        const chunkPublishersData = this.sliceData(await data);     
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
            li.innerHTML = item;
            ul.appendChild(li);
        }

        this.init();
    }
}