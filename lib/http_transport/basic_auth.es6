import Middleware from '../middleware';

export class BasicAuth extends Middleware {
    constructor(request, login, password, sendImmediately, bearer) {
        this.request = request;
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
        let my_header_stream = header_stream.scan('');
        //do subrequest
        return my_header_stream;
    }

    processResponseBody(body_stream) {
        ....

        return my_body_stream;
    }

    //['http', 'https'] - names of supported protocols
    protocols() {
        return ['http', 'https'];
    }
}
