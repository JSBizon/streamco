/**
 *
 * Create request approaches
 * ================
 *
 * Data:
 * =====
 * Need to set different options to the request
 * Easy set up additional middlewares
 *
 * Primary Course
 * ==============
 * Exception Course
 * ================
 */

//Plugin interface

//Learn Apache 2 plugins
//Nginx plugins
//

class MyMiddleware extends Middleware {
    constructor(request, arg1, arg2,...) {
        thi.request = request;
        this.arg1 = arg1;
        this.arg2 = arg2;
    }

    processHeader(header_stream) {
        ....

        return my_header_stream;
    }

    processBody(body_stream) {
        ....

        return my_body_stream;
    }


    //['http', 'https'] - names of supported protocols
    protocols() {

    }

    //['CurlTransport', 'RequestTransport'] - names of supported transports
    transports() {

    }
}
