class RequestsFactory{
    static async createRequest(httpMethod, url, urlParams, requestParams, body){
        switch(httpMethod.toLowerCase()){
            case 'get': return await RequestsFactory.sendRequest(url, urlParams);
            case 'post': return await RequestsFactory.sendRequest(url, urlParams, requestParams, body);
            case 'put': return await RequestsFactory.sendRequest(url, urlParams, requestParams, body);
            case 'delete': return await RequestsFactory.sendRequest(url, urlParams);
            default: {
                const errHandler = await import(/* webpackChunkName: "errorHandler" */ './errorHandler.js');
                errHandler.default.createPopup("invalid http request");
            }        
        }
    }
    static async sendRequest (url, urlParams, requestParams, body){
        try{
            let result;

            if(body && requestParams){
                requestParams.body = JSON.stringify(body);
                result = await fetch(query, requestParams);
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
    apply: function(target, that, args){
        console.log(`method: ${args[0]}, \nquery: ${args[1]}, \nquery body: ${args[2]}`);
    
        return target(...args);
    }
}

export default new Proxy(RequestsFactory.createRequest, proxyHandler);