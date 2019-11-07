class RequestsFactory{
    static async createRequest(httpMethod, url, urlParams, body){
        switch(httpMethod.toLowerCase()){
            case 'get': return await RequestsFactory.sendRequest(url, urlParams);
            case 'post': return await RequestsFactory.sendRequest(url, urlParams, body);
            case 'put': return await RequestsFactory.sendRequest(url, urlParams, body);
            case 'delete': return await RequestsFactory.sendRequest(url, urlParams);
            default: {
                const errHandler = await import(/* webpackChunkName: "errorHandler" */ './errorHandler.js');
                errHandler.default.createPopup("invalid http request");
            }        
        }
    }
    static async sendRequest (url, urlParams, body){
        try{
            let result;

            if(body){
                result = await fetch(url, body);
            }
            else{
                let queryParams = '?';
                for(let prop in urlParams){
                    queryParams += `${prop}=${urlParams[prop]}&`;
                }
                const query = `${url}${queryParams}`.slice(0,-1);

                result = await fetch(query);
            }
            
            return await result.json();
        }catch(e){
            const errHandler = await import(/* webpackChunkName: "errorHandler" */ './errorHandler.js');
            errHandler.default.createPopup(e.message);
        }
    }
}

const proxyHandler = {
    apply: function(target, _that, args){
        let consoleString ='';

        for(let arg of args){
            if(typeof arg === 'object'){
                for(let item in arg){
                    consoleString += `${item}=${arg[item]}\n`;
                }         
            }
            else{
                consoleString += `${arg}\n`;
            }        
        }
        console.log(consoleString);      
    
        return target(...args);
    }
}

export default new Proxy(RequestsFactory.createRequest, proxyHandler);