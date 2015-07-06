import { isString } from "./helpers";

export class Streamco {

    constructor({transports = [], parallel_requests = 10,
                middlewares = [], debug_subrequests = false }) {

        if ( ! isString(arguments[0]) ) {
            this.transports = transports;
            this.plugins = plugins;
            this.parallel_requests = parallel_requests;
        } else {
            //load config file
        }
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

    use(middleware) {

    }
}
