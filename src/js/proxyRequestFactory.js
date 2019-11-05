import apiFactory from './requestsFactory.js';

const proxyHandler = {
    apply: function(target, that, args){
        console.log(`method: ${args[0]}, \nquery: ${args[1]}, \nquery body: ${args[2]}`);
    
        return target(...args);
    }
}

export default new Proxy(apiFactory.createRequest, proxyHandler);