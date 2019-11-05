const errorHandler = (async() => await import('./errorHandler.js'))();

class RequestsFactory{
    static async createRequest(httpMethod, requestQuery, requestParameters){
        switch(httpMethod.toLowerCase()){
            case 'get': return await RequestsFactory.sendRequest(requestQuery);
            case 'post': return await RequestsFactory.sendRequest(requestQuery, requestParameters);
            case 'put': return await RequestsFactory.sendRequest(requestQuery, requestParameters);
            case 'delete': return await RequestsFactory.sendRequest(requestQuery);
            default: (async()=>await errorHandler.then(x => x.default.createPopup('unsupported httpMethod')))();         
        }
    }
    static async sendRequest (query, body = null){
        try{
            const result = await fetch(query,body);
            let jsonResult = await result.json();
            return jsonResult;
        }catch(e){
            (async()=>await errorHandler.then(x => x.default.createPopup(e.message)))();
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