/**
 * 
 * Create request approaches
 * ================
 *
 * Data:
 * =====
 * Need to set different options to the request
 * Easy set up additional plugins
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

class MyPlugin extends IPlugin {
    constructor(streamco, request, arg1, arg2,...) {
        thi.request = request;
        this.arg1 = arg1;
        this.arg2 = arg2;
    }

    processRequestHeader(header_stream) {
        ....

        return my_header_stream;
    }

    processRequestBody(body_stream) {
        ....

        return my_body_stream;
    }

    processResponseHeader(header_stream) {
        ....

        return my_header_stream;
    }

    processResponseBody(body_stream) {
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
