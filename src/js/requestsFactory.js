const errorHandler = (async() => await import('./errorHandler.js'))();

export default class RequestsFactory{
    static async createRequest(httpMethod, requestQuery, requestParameters){
        switch(httpMethod.toLowerCase()){
            case 'get':
                try{
                    return await fetch(requestQuery).then(x=>x.json());
                }catch(e){
                    (async()=>await errorHandler.then(x => x.default.createPopup(e)))();
                }
            default:
                try{
                    return await fetch(requestQuery, requestParameters).then(x=>x.json());
                }catch(e){
                    (async()=>await errorHandler.then(x => x.default.createPopup(e)))();
                }              
        }
    }
}