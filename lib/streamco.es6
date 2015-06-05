export class Streamco {

    constructor({transports : [], parallel_requests = 10 ,plugins =[]}) {
        this.transports = transports;
        this.plugins = plugins;
        this.parallel_requests = parallel_requests;
    }

    _configureRequest(request) {
        
        return request;
    }

    request(uri) {

    }

    post(uri) {

    }

    delete(uri) {
        
    }

    put(uri) {

    }

    get(uri) {

    }

    getTransport(uri) {

    }
}
