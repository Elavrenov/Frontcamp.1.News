class ErrorHandler{
    constructor(){
        if(!ErrorHandler.instance){
            ErrorHandler.instance = this;
        }

        return ErrorHandler.instance;
    }

    createPopup(exceptionMsg){
        const initialDiv = document.getElementById('page-errors');
        const errorDiv = document.createElement('div');

        const errHeader = document.createElement('h3');
        errHeader.innerHTML = `An error has occurred. Check console for view error message.`;
        errorDiv.appendChild(errHeader);

        const closeBtn = document.createElement('a');
        closeBtn.innerHTML = "Close";
        errorDiv.appendChild(closeBtn);
        closeBtn.onclick = () => errorDiv.parentNode.removeChild(errorDiv);;

        console.log(`Error handler: ${exceptionMsg}`);
        initialDiv.appendChild(errorDiv);     
    }   
}

const instance = new ErrorHandler();
Object.freeze(instance);

export default instance;